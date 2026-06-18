import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import apexbg from '../assets/apexbg.jpg';
import apex1 from '../assets/apex/apex1.png';
import apex2 from '../assets/apex/apex2.png';
import apex3 from '../assets/apex/apex3.png';
import apex4 from '../assets/apex/apex4.png';
import apex5 from '../assets/apex/apex5.png';
import apex6 from '../assets/apex/apex6.png';
import apex7 from '../assets/apex/apex7.png';
import apex8 from '../assets/apex/apex8.png';
import apex9 from '../assets/apex/apex9.png';
import '../Styles/project-detail.css';

const features = {
    routes: [
        'Plot A-to-B routes on an interactive map using OSRM routing engine',
        'Preview routes as a polyline before driving — navigate turn-by-turn inside the app',
        'Save routes with a title, description, and photos after a drive',
        'Make routes public to share with the community or keep them private',
    ],
    social: [
        'Instagram-style image feed — post photos with captions, like, comment, and share via DMs',
        'Full real-time DM system with typing indicators, read receipts, and online presence',
        'Follow / unfollow users, view follower and following lists, block accounts',
        'Report inappropriate content — reviewed in the admin web panel',
    ],
    xp: [
        'Claim geo-located XP spots (fuel stations, parking) sourced live from OpenStreetMap via Overpass API',
        'Season-based quests with geo-fenced checkpoints — app auto-checks GPS and awards XP on arrival',
        'Earn XP by attending group meetups within 500 m of the pin location',
        'Global and friends-only leaderboard, filterable by 7 days, 30 days, or all-time',
    ],
    meets: [
        'Drop a pin on the map to create a scheduled group meetup with a date and description',
        'Other users browse and join upcoming meets from the community tab',
        'Attendees within 500 m of the location automatically claim +100 XP when the meet starts',
        'Expired meets and past events are auto-cleaned by a nightly cron job',
    ],
};

const mobileStack = [
    'React Native (Expo SDK 54)',
    'React Navigation v7 — Stack + Bottom Tabs',
    'Leaflet.js inside a WebView (map rendering)',
    'OSRM — route calculation & turn-by-turn',
    'OpenStreetMap Overpass API (XP spots)',
    'expo-location — real-time GPS tracking',
    'Axios with JWT interceptors & auto token refresh',
];

const backendStack = [
    'Node.js + Express.js',
    'PostgreSQL — connection pooling via pg',
    'WebSocket (ws) — real-time DMs on same HTTP server',
    'JWT (1-day access) + bcryptjs (12 salt rounds)',
    'Multer + Sharp + Cloudflare R2 (image storage)',
    'node-cron — nightly scheduled cleanup jobs',
    'express-rate-limit — brute-force & abuse protection',
];

const adminStack = [
    'React (Vite) — standalone web app',
    'Axios — same backend API',
    'JWT auth (7-day token) + separate admin endpoint',
    'adminMiddleware — second auth layer on all admin routes',
    'Content moderation dashboard — review reports, take down posts',
];

const authSecurity = [
    'bcrypt password hashing — 12 salt rounds',
    'JWT access tokens — 1-day expiry, never stored in DB',
    'Refresh token rotation — old token deleted on every refresh',
    '80-char cryptographically random refresh tokens (crypto.randomBytes)',
    'Nightly cron purges all expired refresh tokens',
];

const apiSecurity = [
    'Auth endpoints rate-limited: 10 req / 15 min per IP',
    'Global rate limit: 1000 req / 15 min per IP',
    'authMiddleware validates JWT before any handler runs',
    'adminMiddleware — second layer check on all admin routes',
    'WebSocket auth: first frame must carry a valid JWT',
];

const dataSecurity = [
    'Parameterized SQL queries throughout — SQL injection impossible',
    'MIME-type file whitelist: JPEG, PNG, WebP only',
    'Sharp strips EXIF metadata (incl. GPS) on every upload',
    '8 MB upload cap enforced by Multer before processing',
    'Files in Cloudflare R2 CDN — R2 objects deleted on post/avatar delete',
];

const GALLERY_COUNT = 9;

export default function ProjectApexRoads() {
    const [activeFeature, setActiveFeature] = useState('routes');

    const galleryImages = [apex1, apex2, apex3, apex4, apex5, apex6, apex7, apex8, apex9];
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [loadedCount, setLoadedCount] = useState(0);
    const isLoading = loadedCount < galleryImages.length;
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

    return (
        <div className='project-detail'>
            <div
                className='pd-hero'
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.68)), url(${apexbg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div>
                    <h1>Apex Roads <span>— React Native Mobile App (WIP)</span></h1>
                    <p>
                        A mobile-first social platform for driving and motorcycle enthusiasts.
                        Route planning, live navigation, XP progression, community challenges,
                        and group ride coordination — all in one app.
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
                <strong>Private Repository</strong>
                <p>
                    The source code for this project is kept private to protect its security architecture and business logic.
                    If you're interested in reviewing the codebase — for hiring, collaboration, or other professional purposes —
                    please reach out directly and I'll be happy to arrange access.
                </p>
            </div>

            <div className='pd-section'>
                <h2>About the project</h2>
                <p>
                    Apex Roads is built for road drivers and motorcycle enthusiasts — think Strava, but for cars and bikes.
                    Users log routes, earn XP, climb leaderboards, share photos, and organize group rides.
                    The app combines an interactive map engine powered by OSRM and Leaflet, a real-time social layer over
                    WebSockets, a gamification system with geo-fenced quests, and live GPS tracking — all on a single
                    PostgreSQL-backed Node.js API with image delivery via Cloudflare R2.
                </p>
            </div>

            <div className='pd-section pd-dark'>
                <h2>Features</h2>
                <div className='pd-tabs'>
                    <button className={activeFeature === 'routes' ? 'active' : ''} onClick={() => setActiveFeature('routes')}>Routes & Nav</button>
                    <button className={activeFeature === 'social' ? 'active' : ''} onClick={() => setActiveFeature('social')}>Social</button>
                    <button className={activeFeature === 'xp' ? 'active' : ''} onClick={() => setActiveFeature('xp')}>XP & Quests</button>
                    <button className={activeFeature === 'meets' ? 'active' : ''} onClick={() => setActiveFeature('meets')}>Meets</button>
                </div>
                <div className='pd-tabs-content'>
                    <ul className={`pd-list${activeFeature !== 'routes' ? ' pd-list-inactive' : ''}`}>
                        {features.routes.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                    <ul className={`pd-list${activeFeature !== 'social' ? ' pd-list-inactive' : ''}`}>
                        {features.social.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                    <ul className={`pd-list${activeFeature !== 'xp' ? ' pd-list-inactive' : ''}`}>
                        {features.xp.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                    <ul className={`pd-list${activeFeature !== 'meets' ? ' pd-list-inactive' : ''}`}>
                        {features.meets.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                </div>
            </div>

            <div className='pd-section'>
                <h2>Tech Stack</h2>
                <div className='pd-features'>
                    <div>
                        <h3>Mobile App</h3>
                        <ul className='pd-list'>
                            {mobileStack.map((t, i) => <li key={i}>{t}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3>Backend</h3>
                        <ul className='pd-list'>
                            {backendStack.map((t, i) => <li key={i}>{t}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3>Admin Panel</h3>
                        <ul className='pd-list'>
                            {adminStack.map((t, i) => <li key={i}>{t}</li>)}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='pd-section pd-dark'>
                <h2>Security</h2>
                <div className='pd-features'>
                    <div>
                        <h3>Auth & Sessions</h3>
                        <ul className='pd-list'>
                            {authSecurity.map((t, i) => <li key={i}>{t}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3>API Protection</h3>
                        <ul className='pd-list'>
                            {apiSecurity.map((t, i) => <li key={i}>{t}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3>Data & Files</h3>
                        <ul className='pd-list'>
                            {dataSecurity.map((t, i) => <li key={i}>{t}</li>)}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='pd-section'>
                <h2 id='gallery'>Gallery</h2>
                {isLoading && (
                    <div className='pd-gallery-spinner'>
                        <div className='pd-spinner-ring'></div>
                    </div>
                )}
                <div className='pd-gallery' style={isLoading ? { display: 'none' } : {}}>
                    {galleryImages.map((img, i) => (
                        <div key={i} className='pd-gallery-item pd-gallery-photo' onClick={() => openLightbox(i)}>
                            <img src={img} alt={`Apex Roads screenshot ${i + 1}`} onLoad={() => setLoadedCount(c => c + 1)} />
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
