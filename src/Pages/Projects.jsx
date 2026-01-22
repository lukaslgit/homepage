import { Link } from "react-router-dom";
import { useContext } from "react";
import translationConfig from "../Locales/translation-config";
import { LanguageContext } from "../utils/LanguageContext";

import '../Styles/projects.css';
import { faCloud, faMagnifyingGlass, faSun, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sun from '../assets/weatherSun.png';

export default function Projects(){

    const { lang, setLang } = useContext(LanguageContext);
    
    const t = translationConfig[lang];

    return(
        <section className="top-section">
            <div className='content'>
                <div className='title'>
                    <h2>{t.my}</h2>
                    <h1>{t.projects}</h1>
                </div>
                <div>
                    <ul>
                        <li className='project'>
                            <div className='wrapImg'>
                                <div className='monitorImg'>
                                    <div className='searchBar'>
                                        <p>Vienna <strong>(AT)</strong></p>
                                        <div className='inputEl'>
                                            <input placeholder='Try me!'></input>
                                            <a href={'https://lutonsky.eu/projects/weatherapp/'}><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                                        </div>
                                        <button className='weatherDarkMode' onClick={() => {
                                            document.querySelector('.monitorImg').classList.toggle('darkmode');
                                        }}><FontAwesomeIcon icon={faSun} /></button>
                                    </div>
                                    <div className='weatherContent'>
                                        <div className='left'>
                                            <div className='el1'>
                                                <div>
                                                    <img src={sun}></img>
                                                    <div className='mainInfo'>
                                                        <p>18°C</p>
                                                        <p>9:41</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='el2'>
                                                <div>
                                                    <p>Humidity</p>
                                                    <p>54%</p>
                                                </div>
                                                <div>
                                                    <p>Wind</p>
                                                    <p>6km/h</p>
                                                </div>
                                                <div>
                                                    <p>Visibility</p>
                                                    <p>10km</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='right'>
                                            <div className='el1'>
                                                <div className='top'>
                                                    <p>24H</p>
                                                    <p>5DAYS</p>
                                                </div>
                                                <div className='bottom'>
                                                    <div className='bottomEl'>
                                                        <div>
                                                            <img src={sun}></img>
                                                            <p>11:00</p>
                                                        </div>
                                                        <div>
                                                            <p className='celsius'>19°C</p>
                                                        </div>
                                                    </div>
                                                    <div className='bottomEl'> 
                                                        <div>
                                                            <img src={sun}></img>
                                                            <p>14:00</p>
                                                        </div>
                                                        <div>
                                                            <p className='celsius'>23°C</p>
                                                        </div>
                                                    </div>
                                                    <div className='bottomEl'>
                                                        <div>
                                                            <img src={sun}></img>
                                                            <p>17:00</p>
                                                        </div>
                                                        <div>
                                                            <p className='celsius'>21°C</p>
                                                        </div>
                                                    </div>
                                                    <div className='bottomEl'>
                                                        <div>
                                                            <img src={sun}></img>
                                                            <p>20:00</p>
                                                        </div>
                                                        <div>
                                                            <p className='celsius'>19°C</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='weatherFooter'>
                                        <p>Weather App</p>
                                        <p>Lukas Lutonsky</p>
                                    </div>
                                </div>
                                <div className='icon'>
                                    <FontAwesomeIcon icon={faCloud}/>
                                    <h2>WeatherApp</h2>
                                </div>
                                <div className='monitorStand'>
                                    <div className='leg'></div>
                                    <div className='support'></div>
                                </div>
                            </div>
                            <div className='project-desc'>
                                <h2>React + Express</h2>
                                <p> 
                                    <a>(08/2025)</a>
                                    {t.projectpage_main1}
                                </p>
                                <div className="project-links">
                                    <a href={'https://lutonsky.eu/projects/weatherapp/'}>LIVE</a>
                                    <Link to={'https://github.com/lukaslgit/weatherapp'} target="_blank" rel="noopener noreferrer">GitHub</Link>
                                </div>
                            </div>
                        </li>
                        <li className='project'>
                            <div className='wrapImg'>
                                <div className='monitorImg'>
                                    <div>
                                        <h2>Work in progress</h2>
                                        <a href="https://lutonsky.eu/projects/truck_managment_app/">Try it anyway!</a>
                                        <p>Not optimized for mobile yet!</p>
                                    </div>
                                </div>
                                <div className='icon'>
                                    <FontAwesomeIcon icon={faTruck}/>
                                    <h2>TruckManager</h2>
                                </div>
                                <div className='monitorStand'>
                                    <div className='leg'></div>
                                    <div className='support'></div>
                                </div>
                            </div>
                            <div className='project-desc'>
                                <h2>PERN Fullstack</h2>
                                <p>
                                    (WIP)
                                </p>
                                <p>
                                    This is a work-in-progress application with separate login for managers and workers, using secure authentication (JWT) and password hashing (bcrypt). 
                                    Managers can create tasks and manage trucks, while workers can view their assigned tasks.
                                </p>
                                <p>
                                    If you want to test it, I can provide login credentials or a manager key to register your own account.
                                </p>
                                <div className="project-links">
                                    <a href={'https://lutonsky.eu/projects/truck_managment_app/'}>LIVE</a>
                                    <Link to={'https://github.com/lukaslgit/truck-management-app'} target="_blank" rel="noopener noreferrer">GitHub</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}