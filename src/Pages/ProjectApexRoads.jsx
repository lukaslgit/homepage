import { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import translationConfig from "../Locales/translation-config";
import { LanguageContext } from "../utils/LanguageContext";
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


export default function ProjectApexRoads() {

    const { lang, setLang } = useContext(LanguageContext);
    
    const t = translationConfig[lang];

    const features = {
        routes: [
            t.apex_features_routes1,
            t.apex_features_routes2,
            t.apex_features_routes3,
            t.apex_features_routes4,
        ],
        social: [
            t.apex_features_social1,
            t.apex_features_social2,
            t.apex_features_social3,
            t.apex_features_social4,
        ],
        xp: [
            t.apex_features_xp1,
            t.apex_features_xp2,
            t.apex_features_xp3,
            t.apex_features_xp4,
        ],
        meets: [
            t.apex_features_meets1,
            t.apex_features_meets2,
            t.apex_features_meets3,
            t.apex_features_meets4,
        ],
    };

    const mobileStack = [
        t.apex_mobileStack1,
        t.apex_mobileStack2,
        t.apex_mobileStack3,
        t.apex_mobileStack4,
        t.apex_mobileStack5,
        t.apex_mobileStack6,
        t.apex_mobileStack7,
    ];

    const backendStack = [
        t.apex_backendStack1,
        t.apex_backendStack2,
        t.apex_backendStack3,
        t.apex_backendStack4,
        t.apex_backendStack5,
        t.apex_backendStack6,
        t.apex_backendStack7,
    ];

    const adminStack = [
        t.apex_adminStack1,
        t.apex_adminStack2,
        t.apex_adminStack3,
        t.apex_adminStack4,
        t.apex_adminStack5,
    ];

    const authSecurity = [
        t.apex_authSecurity1,
        t.apex_authSecurity2,
        t.apex_authSecurity3,
        t.apex_authSecurity4,
        t.apex_authSecurity5,
    ];

    const apiSecurity = [
        t.apex_apiSecurity1,
        t.apex_apiSecurity2,
        t.apex_apiSecurity3,
        t.apex_apiSecurity4,
        t.apex_apiSecurity5,
    ];

    const dataSecurity = [
        t.apex_dataSecurity1,
        t.apex_dataSecurity2,
        t.apex_dataSecurity3,
        t.apex_dataSecurity4,
        t.apex_dataSecurity5,
    ];

    const GALLERY_COUNT = 9;



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
                    <h1>Apex Roads <span>- React Native Mobile App (WIP)</span></h1>
                    {t.apex_desc}
                    <div className='github-private-wrap'>
                        <span className='github-private-btn'>GitHub</span>
                        <div className='github-tooltip'>
                            {t.apex_private_tooltip}
                        </div>
                    </div>
                </div>
            </div>

            <div className='pd-section pd-private-notice'>
                <strong>{t.private_repository}</strong>
                <p>
                    {t.apex_private_desc}
                </p>
            </div>

            <div className='pd-section'>
                <h2>{t.about_the_project}</h2>
                {t.apex_about_desc}
            </div>

            <div className='pd-section pd-dark'>
                <h2>{t.features}</h2>
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
                <h2>{t.security}</h2>
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
                <h2 id='gallery'>{t.gallery}</h2>
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
                <Link to='/projects'>← {t.projects}</Link>
            </div>
        </div>
    );
}
