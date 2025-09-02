import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getItem, setItem } from "../utils/localStorage.js";
import translationConfig from "../Locales/translation-config.js";
import { LanguageContext } from "../utils/LanguageContext.jsx";

import '../Styles/header.css';
import { faSun, faX, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import england from '../assets/england.svg';
import germany from '../assets/germany.svg';
import slovakia from '../assets/slovakia.svg';


export default function Header(){

    const [scrolled, setScrolled] = useState(false);
    const { lang, setLang } = useContext(LanguageContext);

    const [mobileLangMenu, setMobileLangMenu] = useState(false);
    const t = translationConfig[lang];

    const languages = {
        'eng': england,
        'ger': germany,
        'svk': slovakia
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setItem('lang', lang)
    }, [lang])

    function mainLang(){
        return languages[lang] || england;
    }

    


    function closeMobileNav(){
        const element = document.querySelector('.burger-content');
        if (element) element.style.display = 'none';
    }

    useEffect(() => {
        if (mobileLangMenu){
            const element = document.querySelector('.lang-mobile');
            if (element) element.style.display = 'block'; 
        } else {
           const element = document.querySelector('.lang-mobile');
            if (element) element.style.display = 'none';  
        }
    }, [mobileLangMenu])




    return(
        <header className={scrolled ? "scrolled" : ""}>
                <div className="header-container">
                    <Link to={'/'} className="header-logo">Lutonsky</Link>
                    <nav>
                        <ul>
                            <li><Link to={'/'}>{t.home}</Link></li>
                            <li><Link to={'/projects'}>{t.projects}</Link></li>
                            <li><Link to={'/contact'}>{t.contact}</Link></li>
                        </ul>
                    </nav>
                    <div className="header-right">
                        <div className="dropdown-lang">
                            <button><img src={mainLang()}></img></button>
                            <div className="lang">
                                
                                {Object.entries(languages).filter(([item]) => item !== lang).map(([id, flag]) => (
                                    <button key={id} onClick={() => setLang(id)}><img src={flag}></img></button>
                                ))}
                            </div>
                        </div>
                        <Link to={'/contact'} className="header-btn">{t.getInTouch}</Link>
                        <button><FontAwesomeIcon icon={faSun} /></button>
                    </div>
                </div>

                <div className="header-container-mobile">
                    <div className="title">
                        <Link to={'/'} className="header-logo">Lutonsky</Link>
                    </div>
                    <div className="openBtn">
                        <button onClick={() => {
                            const element = document.querySelector('.burger-content');
                            if (element) element.style.display = 'block';
                        }}><FontAwesomeIcon icon={faBars} /></button>
                    </div>
                    <div className="burger-content">
                        <button onClick={() => closeMobileNav()} className="closeMenu"><FontAwesomeIcon icon={faX} /></button>
                        <nav>
                        <ul>
                            <li><Link onClick={() => closeMobileNav()} to={'/'}>{t.home}</Link></li>
                            <li><Link onClick={() => closeMobileNav()} to={'/projects'}>{t.projects}</Link></li>
                            <li><Link onClick={() => closeMobileNav()} to={'/contact'}>{t.contact}</Link></li>
                        </ul>
                        </nav>
                        <div className="header-right">
                            <div className="dropdown-lang">
                                <button onClick={() => setMobileLangMenu(!mobileLangMenu)}><img src={mainLang()}></img></button>
                                <div className="lang-mobile">
                                    
                                    {Object.entries(languages).filter(([item]) => item !== lang).map(([id, flag]) => (
                                        <button key={id} onClick={() => {setLang(id); setMobileLangMenu(!mobileLangMenu)}}><img src={flag}></img></button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </header>
    )
}