import { Link } from "react-router-dom";
import { useContext } from "react";
import translationConfig from "../Locales/translation-config";
import { LanguageContext } from "../utils/LanguageContext";

import '../Styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function(){

    const { lang, setLang } = useContext(LanguageContext);
          
    const t = translationConfig[lang];

    return(
        <footer>

            <div className='footerNav'>
                <ul>
                    <li><Link to={'/'}>{t.home}</Link></li>
                    <li><Link to={'/projects'}>{t.projects}</Link></li>
                    <li><Link to={'/contact'}>{t.contact}</Link></li>
                </ul>
            </div>
            
            <div className='footerInfo'>
                <p>© 2025 Lukas Lutonsky. All rights reserved.</p>

                <ul>
                    <li><a href='https://github.com/lukaslgit' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                </ul>
            </div>
        </footer>
    )
}