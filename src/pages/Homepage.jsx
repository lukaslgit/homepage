import { Link } from "react-router-dom";
import { useContext } from "react";
import translationConfig from "../Locales/translation-config";
import { LanguageContext } from "../utils/LanguageContext.jsx";

import '../Styles/homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faServer, faCode, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faReact, faHtml5 } from '@fortawesome/free-brands-svg-icons';

export default function Homepage(){

    const { lang, setLang } = useContext(LanguageContext);

    const t = translationConfig[lang];

    return(
        <>
            <section className='top-section'>

                <div className='content'>
                    <h2>Lukas Lutonsky</h2>
                    <h1>FRONTEND DEVELOPER</h1>
                    <p>{t.homepage_main1}</p>
                    <p>{t.homepage_main2}</p>
                </div>
            </section>
            <section className='mid-section'>

                <div className='curve'>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>

                <div className='content'>
                    <Link to={'/contact'} className='box-content'>
                        <div className="icon">
                            <FontAwesomeIcon icon={faMobileAlt} />
                        </div>

                        <div className="box-text">
                            <h2>{t.homepage_mid1_title}</h2>
                            <p>{t.homepage_mid1_text}</p>
                            <span className="fakeBtn">{t.contactMe}</span>
                        </div>
                    </Link>
                    <Link to={'/contact'} className='box-content'>
                        <div className="icon">
                            <FontAwesomeIcon icon={faServer} />
                        </div>

                        <div className="box-text">
                            <h2>{t.homepage_mid2_title}</h2>
                            <p>{t.homepage_mid2_text}</p>
                            <span className="fakeBtn">{t.contactMe}</span>
                        </div>
                    </Link>
                    <Link to={'/contact'} className='box-content'>
                        <div className="icon">
                            <FontAwesomeIcon icon={faCode} />
                        </div>

                        <div className="box-text">
                            <h2>{t.homepage_mid3_title}</h2>
                            <p>{t.homepage_mid3_text}</p>
                            <span className="fakeBtn">{t.contactMe}</span>
                        </div>

                        
                    </Link>
                </div>
            </section>
            <section className="end-section">
                <div className="curve">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="content">
                    
                    <div className="about-left">
                        <p>{t.somethingShort}</p>
                        <h2>{t.aboutMe}</h2>
                    </div>
                    
                    <div className="about-right">
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faHtml5}/>
                                <h2>{t.homepage_end1_title}</h2>
                                <p>{t.homepage_end1_text}</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faReact}/>
                                <h2>{t.homepage_end2_title}</h2>
                                <p>{t.homepage_end2_text}</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faServer}/>
                                <h2>{t.homepage_end3_title}</h2>
                                <p>{t.homepage_end3_text}</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faLanguage}/>
                                <h2>{t.homepage_end4_title}</h2>
                                <p>{t.homepage_end4_text}</p>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </section>
        </>
    )
}