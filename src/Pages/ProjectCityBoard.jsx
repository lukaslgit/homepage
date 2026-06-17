import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../Styles/project-detail.css';

const firmware = [
    'ESP32-S3 with PlatformIO / Arduino framework — SPI display, BLE 5.0, 802.11 Wi-Fi, LEDC PWM backlight',
    'FreeRTOS dual-task architecture — fetch task and render/animation task run concurrently, synchronized via recursive mutex and binary semaphore',
    'TFT_eSPI with sprite compositing and partial-region screen updates — eliminates flicker on a 40 ms animation loop',
    'BLE GATT peripheral with 14 custom characteristics: Wi-Fi credentials, stop IDs, direction filter, walk time, brightness, night mode, device ID, factory reset',
    'HTTP REST server (port 80) for fast LAN-based configuration with automatic BLE fallback',
    'NVS flash (ESP32 Preferences) — all settings survive power cycles with no external storage',
    'City-specific departure board layouts, RGB565 color palettes, and rendering code for Vienna, Graz, Berlin, and Bratislava',
    'Animated imminent-departure indicator, marquee scrolling for long destination names and service disruptions, live HH:MM:SS clock in the header',
];

const mobile = [
    'React Native 0.81 + Expo SDK 54 — cross-platform iOS and Android',
    '4-screen setup wizard: BLE scan → Wi-Fi configuration → Stop & direction selection → Live departure monitor',
    'BLE device scanning and GATT characteristic reads/writes (react-native-ble-plx)',
    'Dual-transport config sync: HTTP over Wi-Fi attempted first (3 s timeout), BLE GATT as automatic fallback; connection mode auto-detected with background polling',
    '4-city stop search: WienerLinien CSV index with platform merging, ÖBB transport.rest, BVG transport.rest, self-built DPB REST API',
    'Fully custom PanResponder slider — drag-anchor fix eliminates position jump on grab; blocks native scroll in nested ScrollView',
    'Multi-device dashboard with full config persisted in AsyncStorage; duplicate-device detection by BLE ID and IP address',
    'Live monitor screen: 15 s auto-refresh, color-coded countdown (red / orange / yellow), inline brightness control while connected',
];

const backend = [
    'Node.js + Express 5 REST API serving live departure data for Bratislava DPB from the official GTFS static feed',
    'Full GTFS CSV parser (stops, routes, trips, stop_times, calendar, calendar_dates) into in-memory Maps — O(1) lookup, no database',
    'CET/CEST timezone-aware schedule computation with correct after-midnight trip wrapping',
    'Geospatial stop search using the haversine formula',
    'Response envelope mirrors WienerLinien Ogd API format — firmware needs zero city-specific parsing logic for Bratislava',
    'Endpoints: stop search by name and by geo-radius, departure monitor with grouped directions, line list, full trip stop sequence',
];

const tooling = [
    'Python script converting any .ttf font into Adafruit GFX PROGMEM bitmap format for TFT_eSPI on ESP32',
    'Uses libfreetype6 via Python ctypes — no pip packages or C build toolchain required',
    'Generates glyphs for Unicode 0x0020–0x017E (Latin + Latin Extended-A): Slovak Š ľ č ž ť ď and other Central European characters',
    'Produces all 5 custom fonts compiled into firmware flash: Poppins Bold (20pt, 12pt), Doto Regular / Bold / Black (12pt)',
];

const engineeringLeft = [
    {
        title: 'No public API for Bratislava',
        body: 'Built a complete GTFS static-feed parser from scratch — schedule computation, after-midnight trip wrapping, and CET/CEST timezone handling.',
    },
    {
        title: 'Second-precision countdowns from minute-resolution data',
        body: 'Parsed ISO 8601 departure timestamps into Unix epoch via mktime(); firmware computes exact seconds-remaining live from the stored epoch.',
    },
    {
        title: 'Concurrent display access from two FreeRTOS tasks',
        body: 'Recursive tftMutex guards all TFT calls; a separate depsMutex protects departure data; the animation task uses trylock to stay non-blocking.',
    },
];

const engineeringMid = [
    {
        title: 'Custom slider inside a ScrollView',
        body: 'PanResponder drag-anchor (startXRef) eliminates the position jump caused by locationX changing coordinate origin on grant; onShouldBlockNativeResponder blocks the native scroll layer during a drag.',
    },
    {
        title: 'BLE and HTTP config coexistence',
        body: 'HTTP over Wi-Fi is tried first via AbortController with a 3 s timeout; BLE GATT is used as fallback. The device broadcasts its IP in a BLE characteristic so the app can reconnect automatically.',
    },
    {
        title: 'Duplicate departures from multi-platform GTFS stops',
        body: 'Post-sort O(n²) dedup pass comparing (line, towards, departEpoch) before filling display slots — catches platform-level duplicates that GTFS does not deduplicate.',
    },
];

const engineeringRight = [
    {
        title: 'Full-screen flicker on every clock tick',
        body: 'Partial-region fillRect clears only the header time column; full redraw fires only on mode switch. A clockOnly parameter controls update scope within the 40 ms render loop.',
    },
    {
        title: 'Slovak and Czech characters in firmware fonts',
        body: 'Custom Python font pipeline extended glyph coverage to Latin Extended-A (U+00A0–U+017E); fixed the TFT_eSPI UTF-8 multi-byte decoder path in firmware for glyphs above U+007F.',
    },
];

const GALLERY_COUNT = 8;
const galleryImages = [];

export default function ProjectCityBoard() {
    const [activeTab, setActiveTab] = useState('firmware');
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const touchStartX = useRef(null);

    const openLightbox = (i) => setLightboxIndex(i);
    const closeLightbox = () => setLightboxIndex(null);
    const showPrev = (e) => { e?.stopPropagation(); setLightboxIndex(i => (i - 1 + galleryImages.length) % galleryImages.length); };
    const showNext = (e) => { e?.stopPropagation(); setLightboxIndex(i => (i + 1) % galleryImages.length); };

    const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (delta > 50) showNext();
        else if (delta < -50) showPrev();
        touchStartX.current = null;
    };

    useEffect(() => {
        if (lightboxIndex === null) return;
        const handler = (e) => {
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [lightboxIndex]);

    useEffect(() => {
        document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [lightboxIndex]);

    const tabs = { firmware, mobile, backend, tooling };
    const tabLabels = { firmware: 'Firmware', mobile: 'Mobile App', backend: 'Backend', tooling: 'Font Tooling' };

    return (
        <div className='project-detail'>
            <div
                className='pd-hero'
                style={{ background: 'linear-gradient(135deg, #3d0410 0%, #0c080c 100%)' }}
            >
                <div>
                    <h1>CityBoard <span>— IoT Transit Display (WIP)</span></h1>
                    <p>
                        A custom-built smart departure board showing real-time transit from four cities.
                        The project spans four independent codebases — embedded C++ firmware, a Node.js transit API,
                        a React Native mobile configurator, and a Python font toolchain — built end-to-end by one developer.
                    </p>
                    <div className='github-private-wrap'>
                        <span className='github-private-btn'>GitHub</span>
                        <div className='github-tooltip'>
                            This repository is private. The source code is available for review upon request — feel free to get in touch.
                        </div>
                    </div>
                </div>
            </div>

            <div className='pd-section pd-private-notice'>
                <strong>Coming soon</strong>
                <p>
                    The repository will be made public soon. In the meantime, feel free to get in touch if you'd like early access.
                </p>
            </div>

            <div className='pd-section pd-private-notice'>
                <strong>Inspiration</strong>
                <p>
                    Inspired by <a href='https://github.com/coppermilk/wiener_linien_esp32_monitor' target='_blank' rel='noopener noreferrer' style={{ color: 'rgb(98,161,255)' }}>coppermilk/wiener_linien_esp32_monitor</a> —
                    an open-source Vienna-only departure monitor on the same T-Display S3 hardware. CityBoard took that concept and expanded it into a
                    multi-city system with a dedicated mobile configurator, a custom transit backend, and a full FreeRTOS concurrency model.
                </p>
            </div>

            <div className='pd-section'>
                <h2>About the project</h2>
                <p>
                    CityBoard is a physical IoT device built on the LilyGo T-Display S3 (ESP32-S3 with a built-in 320×170 px TFT display).
                    It connects to Wi-Fi, fetches live departure data from official transit APIs, and renders city-styled departure board
                    layouts with smooth scrolling text, real-time second-precision countdowns, and a live clock.
                    Supported cities are Vienna, Graz, Berlin, and Bratislava.
                </p>
                <p style={{ marginTop: '1.2rem' }}>
                    The device is configured entirely over the air. A companion React Native app walks through
                    a four-step wizard — BLE pairing, Wi-Fi setup, stop selection with direction filtering, and display preferences.
                    When the phone is on the same network, the app uses HTTP for speed; it falls back to BLE GATT automatically
                    when Wi-Fi is unavailable. All settings survive power cycles via NVS flash.
                </p>
                <p style={{ marginTop: '1.2rem' }}>
                    Because Bratislava's DPB transit agency publishes no public API, a dedicated Node.js service was built
                    to parse their official GTFS static feed and expose a REST API whose response format exactly mirrors
                    the WienerLinien Ogd API — so the firmware requires zero city-specific parsing logic for that city.
                </p>
            </div>

            <div className='pd-section pd-dark'>
                <h2>Architecture</h2>
                <div className='pd-tabs'>
                    {Object.entries(tabLabels).map(([key, label]) => (
                        <button
                            key={key}
                            className={activeTab === key ? 'active' : ''}
                            onClick={() => setActiveTab(key)}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className='pd-tabs-content'>
                    {Object.entries(tabs).map(([key, items]) => (
                        <ul key={key} className={`pd-list${activeTab !== key ? ' pd-list-inactive' : ''}`}>
                            {items.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    ))}
                </div>
            </div>

            <div className='pd-section'>
                <h2>Engineering challenges</h2>
                <div className='pd-features'>
                    <div>
                        {engineeringLeft.map(({ title, body }, i) => (
                            <div key={i} style={{ marginBottom: '2rem' }}>
                                <h3>{title}</h3>
                                <p style={{ margin: 0, lineHeight: 1.65, color: 'rgba(0,0,0,0.7)' }}>{body}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        {engineeringMid.map(({ title, body }, i) => (
                            <div key={i} style={{ marginBottom: '2rem' }}>
                                <h3>{title}</h3>
                                <p style={{ margin: 0, lineHeight: 1.65, color: 'rgba(0,0,0,0.7)' }}>{body}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        {engineeringRight.map(({ title, body }, i) => (
                            <div key={i} style={{ marginBottom: '2rem' }}>
                                <h3>{title}</h3>
                                <p style={{ margin: 0, lineHeight: 1.65, color: 'rgba(0,0,0,0.7)' }}>{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='pd-section pd-dark'>
                <h2>Gallery</h2>
                <div className='pd-gallery'>
                    {galleryImages.map((img, i) => (
                        <div key={i} className='pd-gallery-item pd-gallery-photo' onClick={() => openLightbox(i)}>
                            <img src={img} alt={`CityBoard screenshot ${i + 1}`} />
                        </div>
                    ))}
                    {Array.from({ length: GALLERY_COUNT - galleryImages.length }, (_, i) => (
                        <div key={`ph-${i}`} className='pd-gallery-item'>
                            <span>Coming soon</span>
                        </div>
                    ))}
                </div>
            </div>

            {lightboxIndex !== null && (
                <div className='pd-lightbox' onClick={closeLightbox}>
                    <button className='pd-lightbox-close' onClick={closeLightbox}>✕</button>
                    <button className='pd-lightbox-prev' onClick={showPrev}><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <div
                        className='pd-lightbox-img-wrap'
                        onClick={e => e.stopPropagation()}
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                    >
                        <img src={galleryImages[lightboxIndex]} alt={`Screenshot ${lightboxIndex + 1}`} />
                    </div>
                    <button className='pd-lightbox-next' onClick={showNext}><FontAwesomeIcon icon={faChevronRight} /></button>
                    <div className='pd-lightbox-dots'>
                        {galleryImages.map((_, i) => (
                            <button
                                key={i}
                                className={`pd-lightbox-dot${i === lightboxIndex ? ' active' : ''}`}
                                onClick={e => { e.stopPropagation(); setLightboxIndex(i); }}
                            />
                        ))}
                    </div>
                </div>
            )}

            <div className='pd-page-links'>
                <Link to='/projects'>← Projects</Link>
            </div>
        </div>
    );
}
