import puppeteer from 'puppeteer';
import { preview } from 'vite';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

const routes = [
    '/',
    '/projects',
    '/projects/details/cityboard',
    '/projects/details/apexroads',
    '/projects/details/truckmanager',
    '/projects/details/weatherapp',
    '/contact',
    '/eastereggs',
];

async function prerender() {
    const server = await preview({ preview: { port: 4173, strictPort: true } });

    const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH
        || (process.platform === 'linux'
            ? (['/usr/bin/chromium-browser', '/usr/bin/chromium'].find(p => {
                try { return require('fs').existsSync(p); } catch { return false; }
              }) || '/usr/bin/chromium-browser')
            : undefined);

    const browser = await puppeteer.launch({
        headless: true,
        ...(executablePath ? { executablePath } : {}),
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    // Write only after every route is captured: the preview server falls back to dist/index.html,
    // which must stay the empty app shell while pages are being rendered
    const results = [];

    for (const route of routes) {
        process.stdout.write(`Prerendering ${route} ...`);

        const page = await browser.newPage();
        await page.goto(`http://localhost:4173${route}`, {
            waitUntil: 'networkidle0',
            timeout: 30000,
        });

        // Give lazy-loaded components a moment to settle
        await new Promise(r => setTimeout(r, 400));

        const html = await page.content();

        results.push({ route, html });

        await page.close();
        console.log(' ✓');
    }

    await browser.close();

    for (const { route, html } of results) {
        const outDir = route === '/'
            ? distDir
            : join(distDir, ...route.split('/').filter(Boolean));

        mkdirSync(outDir, { recursive: true });
        writeFileSync(join(outDir, 'index.html'), html, 'utf-8');
    }

    server.httpServer.close();

    console.log('\nPrerendering complete.');
}

prerender().catch(err => {
    console.error(err);
    process.exit(1);
});
