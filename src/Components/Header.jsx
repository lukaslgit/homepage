import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../Styles/header.css';
import { faSun} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import england from '../assets/england.svg';
import germany from '../assets/germany.svg';
import slovakia from '../assets/slovakia.svg';

import eng from '../Locales/eng/translation.js';
import ger from '../Locales/ger/translation.js';
import svk from '../Locales/svk/translation.js';

export default function Header(){

    const [scrolled, setScrolled] = useState(false);

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


    const [lang, setLang] = useState('eng')

    const languages = {
        'eng': england,
        'ger': germany,
        'svk': slovakia
    }

    function mainLang(){
        return languages[lang] || england;
    }

    const translations = {
        eng,
        ger,
        svk
    }

    const t = translations[lang];


    return(
        <header className={scrolled ? "scrolled" : ""}>
                <div className="header-container">
                    <Link to={'/'} className="header-logo">Web developer</Link>
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
        </header>
    )
}