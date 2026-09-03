import { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import translationConfig from "../Locales/translation-config";
import { LanguageContext } from "../utils/LanguageContext";
import '../Styles/project-detail.css';
import cb1 from '../assets/cityboard/cityboard1.jpeg';
import cb2 from '../assets/cityboard/cityboard2.jpeg';
import cb3 from '../assets/cityboard/cityboard3.jpeg';
import cb4 from '../assets/cityboard/cityboard4.jpeg';
import cb5 from '../assets/cityboard/cityboard5.jpeg';
import cb6 from '../assets/cityboard/cityboard6.jpeg';
import cb7 from '../assets/cityboard/cityboard7.jpeg';
import cb8 from '../assets/cityboard/cityboard8.jpeg';
import cb9 from '../assets/cityboard/cityboard9.jpeg';
import cb10 from '../assets/cityboard/cityboard10.jpeg';


export default function ProjectCityBoard() {

    const { lang, setLang } = useContext(LanguageContext);

    const t = translationConfig[lang];

    const firmware = [
        t.cb_p_firmware1,
        t.cb_p_firmware2,
        t.cb_p_firmware3,
        t.cb_p_firmware4,
        t.cb_p_firmware5,
        t.cb_p_firmware6,
        t.cb_p_firmware7,
        t.cb_p_firmware8,
    ];

    const mobile = [
        t.cb_p_app1,
        t.cb_p_app2,
        t.cb_p_app3,
        t.cb_p_app4,
        t.cb_p_app5,
        t.cb_p_app6,
        t.cb_p_app7,
        t.cb_p_app8,
    ];

    const backend = [
        t.cb_p_backend1,
        t.cb_p_backend2,
        t.cb_p_backend3,
        t.cb_p_backend4,
        t.cb_p_backend5,
        t.cb_p_backend6,
    ];

    const tooling = [
        t.cb_p_tooling1,
        t.cb_p_tooling2,
        t.cb_p_tooling3,
        t.cb_p_tooling4,
    ];

    const engineeringLeft = [
        {
            title: t.cb_engineeringLeft_t1,
            body: t.cb_engineeringLeft_b1,
        },
        {
            title: t.cb_engineeringLeft_t2,
            body: t.cb_engineeringLeft_b2,
        },
        {
            title: t.cb_engineeringLeft_t3,
            body: t.cb_engineeringLeft_b3,
        },
    ];

    const engineeringMid = [
        {
            title: t.cb_engineeringMid_t1,
            body: t.cb_engineeringMid_b1,
        },
        {
            title: t.cb_engineeringMid_t2,
            body: t.cb_engineeringMid_b2,
        },
        {
            title: t.cb_engineeringMid_t3,
            body: t.cb_engineeringMid_b3,
        },
    ];

    const engineeringRight = [
        {
            title: t.cb_engineeringRight_t1,
            body: t.cb_engineeringRight_b1
        },
        {
            title: t.cb_engineeringRight_t2,
            body: t.cb_engineeringRight_b2
        },
    ];

    const galleryImages = [cb1, cb2, cb3, cb4, cb5, cb6, cb7, cb8, cb9, cb10];

    const [activeTab, setActiveTab] = useState('firmware');
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [loadedCount, setLoadedCount] = useState(0);
    const isLoading = galleryImages.length > 0 && loadedCount < galleryImages.length;
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
                    <h1>CityBoard <span>- IoT Transit Display (WIP)</span></h1>
                    {t.cb_project_desc}
                    <a
                        href='https://github.com/lukaslgit/CityBoard/'
                        className='pd-hero-btn'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        GitHub
                    </a>
                </div>
            </div>

            <div className='pd-section pd-private-notice'>
                <strong>{t.cb_inspiration}</strong>
                {t.cb_inspiration_desc}
            </div>

            <div className='pd-section'>
                <h2>{t.about_the_project}</h2>
                {t.cb_project_about}
            </div>

            <div className='pd-section pd-dark'>
                <h2>{t.architecture}</h2>
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
                <h2>{t.cb_engineering_challenges}</h2>
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
                <h2 id='gallery'>{t.gallery}</h2>
                {isLoading && (
                    <div className='pd-gallery-spinner'>
                        <div className='pd-spinner-ring'></div>
                    </div>
                )}
                <div className='pd-gallery' style={isLoading ? { display: 'none' } : {}}>
                    {galleryImages.map((img, i) => (
                        <div key={i} className='pd-gallery-item pd-gallery-photo' onClick={() => openLightbox(i)}>
                            <img src={img} alt={`CityBoard screenshot ${i + 1}`} onLoad={() => setLoadedCount(c => c + 1)} />
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
