import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import { createRoot } from "react-dom/client";
import App, { preloadRoute } from './App';

const root = document.getElementById('root');

// Render even if a chunk fails to preload; the lazy fallback will retry it
preloadRoute(window.location.pathname).finally(() => {
    createRoot(root).render(<App/>);
});
