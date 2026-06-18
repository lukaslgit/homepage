import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import translationConfig from "../Locales/translation-config";
import { LanguageContext } from "../utils/LanguageContext";
import { useNotificationContext } from "../utils/NotificationContext";

import '../Styles/projects.css';
import { faCloud, faMagnifyingGlass, faCar, faMoon, faSun, faTruck, faBolt, faHouse, faComments, faMap, faUsers, faUser, faBus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sun from '../assets/weatherSun.png';
import truckbg from '../assets/truckbg.jpg';
import apexbg from '../assets/apexbg.jpg';

export default function Projects(){

    const { lang, setLang } = useContext(LanguageContext);
    const { showNotification } = useNotificationContext();
    const [isDark, setIsDark] = useState(true);
    const [orbitAngle, setOrbitAngle] = useState(0);
    const [showTasks, setShowTasks] = useState(false);
    const toggleWeather = () => {
        setOrbitAngle(a => a - 180);
        setTimeout(() => setIsDark(d => !d), 200);
        if (!window.localStorage.getItem('weatherToggled')) {
            window.localStorage.setItem('weatherToggled', '1');
            showNotification('NEW Achievement: Useless darkmode', 'success', 4000);
        }
    };

    const toggleTasks = () => {
        setShowTasks(v => !v);
        if (!window.localStorage.getItem('tasksClicked')) {
            window.localStorage.setItem('tasksClicked', '1');
            showNotification('Achievement unlocked: Tasks?', 'success', 4000);
        }
    };

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
                                <div className='mockupGroup'>
                                <div className='phoneWrap'>
                                    <div className='phoneBody'>
                                        <div className='phoneScreen'>
                                            <div className='phoneTopBar'>
                                                <div className='phoneSpeaker'></div>
                                                <div className='phoneCamera'></div>
                                            </div>
                                            <div className='transitApp'>
                                                <div className='tSteps'>
                                                    <div className='tStep tDone'><div className='tStepDot'>✓</div><span>BLE</span></div>
                                                    <div className='tStepBar'></div>
                                                    <div className='tStep tDone'><div className='tStepDot'>✓</div><span>WiFi</span></div>
                                                    <div className='tStepBar'></div>
                                                    <div className='tStep tActive'><div className='tStepDot'>3</div><span>Stop</span></div>
                                                    <div className='tStepBar tBarGray'></div>
                                                    <div className='tStep tGray'><div className='tStepDot tDotGray'>4</div><span>Monitor</span></div>
                                                </div>
                                                <div className='tBlock'>
                                                    <span className='tLabel'>CITY</span>
                                                    <div className='tCityRow'>
                                                        <div className='tCityChip tChipActive'>Wien</div>
                                                        <div className='tCityChip'>Graz</div>
                                                        <div className='tCityChip'>Berlin</div>
                                                        <div className='tCityChip'>BA</div>
                                                    </div>
                                                </div>
                                                <div className='tBlock'>
                                                    <span className='tLabel'>SEARCH VIENNA STOP</span>
                                                    <div className='tSearchInput'>
                                                        <span>⌕</span>
                                                        <span>Polgarstraße</span>
                                                    </div>
                                                    <div className='tResultCard'>
                                                        <div className='tResultLine'></div>
                                                        <div>
                                                            <p className='tResultTitle'>Polgarstraße</p>
                                                            <p className='tResultSub'>5 platforms (merged)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tBlock'>
                                                    <span className='tLabel'>FILTER BY DIRECTION</span>
                                                    <p className='tDirDesc'>Show only departures in one direction (e.g. for a platform on one side of the street)</p>
                                                    <div className='tDirChosen'>
                                                        <div className='tRadioOn'></div>
                                                        <span>All directions</span>
                                                    </div>
                                                    <div className='tDirItem'>
                                                        <div className='tRadioOff'></div>
                                                        <span className='tLineBadge'>25</span>
                                                        <span>→ Aspern, Oberdorfstraße</span>
                                                    </div>
                                                    <div className='tDirItem'>
                                                        <div className='tRadioOff'></div>
                                                        <span className='tLineBadge'>25</span>
                                                        <span>→ Floridsdorf S U</span>
                                                    </div>
                                                    <div className='tDirItem'>
                                                        <div className='tRadioOff'></div>
                                                        <span className='tLineBadge'>26A</span>
                                                        <span>→ Groß-Enzersdorf</span>
                                                    </div>
                                                    <div className='tDirItem'>
                                                        <div className='tRadioOff'></div>
                                                        <span className='tLineBadge'>26A</span>
                                                        <span className='tLineBadge'>94A</span>
                                                        <span>→ Kagran U</span>
                                                    </div>
                                                    <div className='tDirItem'>
                                                        <div className='tRadioOff'></div>
                                                        <span className='tLineBadge'>94A</span>
                                                        <span>→ Stadlau S U</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='phoneHomeBar'></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='devWrap'>
                                    <div className='devCasing'>
                                        <div className='devScreen'>
                                            <div className='devRow'>
                                                <span className='devNum'>25</span>
                                                <span className='devDest'>Aspern, Oberdorfstr.</span>
                                                <div className='devInd'>
                                                    <span className='devIndDot'></span>
                                                    <span className='devIndDot devIndDotB'></span>
                                                </div>
                                            </div>
                                            <div className='devDivider'></div>
                                            <div className='devRow'>
                                                <span className='devNum'>26<span className='devNumSub'>A</span></span>
                                                <span className='devDest'>Kagran U</span>
                                                <span className='devMin'>2</span>
                                            </div>
                                            <div className='devDivider'></div>
                                            <div className='devRow'>
                                                <span className='devNum'>25</span>
                                                <span className='devDest'>Floridsdorf S U</span>
                                                <span className='devMin'>4</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='devLeg'></div>
                                </div>
                                </div>
                                <div className='icon phoneIcon cityboardIcon'>
                                    <FontAwesomeIcon icon={faBus}/>
                                    <h2>CityBoard</h2>
                                </div>
                            </div>
                            <div className='project-desc'>
                                <h2>C++</h2>
                                <h2>Node.js + React Expo</h2>
                                <p>(05/2026)</p>
                                <p>
                                    A custom IoT departure board with real-time transit data from Vienna, Graz, Berlin, and Bratislava.
                                    Four independent codebases: ESP32-S3 C++ firmware with FreeRTOS, a Node.js GTFS backend,
                                    a React Native BLE/Wi-Fi configurator app, and a Python font pipeline — all built from scratch.
                                </p>
                                <div className='project-links'>
                                    <Link to={'https://github.com/lukaslgit/CityBoard/'} target="_blank" rel="noopener noreferrer">GitHub</Link>
                                    <Link to={'/projects/details/cityboard'}>Details</Link>
                                    <Link to={'/projects/details/cityboard#gallery'}>Gallery</Link>
                                </div>
                            </div>
                        </li>
                        <li className='project'>
                            <div className='wrapImg'>
                                <div className='phoneWrap'>
                                    <div className='phoneBody'>
                                        <div className='phoneScreen'>
                                            <div className='phoneTopBar'>
                                                <div className='phoneSpeaker'></div>
                                                <div className='phoneCamera'></div>
                                            </div>
                                            <div className='apexApp'>
                                                <div className='apexHeader'>
                                                    <div>
                                                        <p className='apexAppTitle'>Apex Roads</p>
                                                        <p className='apexAppSub'>Drive. Progress. Explore.</p>
                                                    </div>
                                                    <div className='apexHeaderIcons'>
                                                        <div className='apexIconBtn'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                                                        <div className='apexIconBtn'>+</div>
                                                    </div>
                                                </div>
                                                <div className='apexSeparator'></div>
                                                <div className='apexTabs'>
                                                    <div className='apexTab apexTabActive'>Routes</div>
                                                    <div className='apexTab'>Posts</div>
                                                </div>
                                                <div className='apexScroll'>
                                                    <p className='apexChallLabel'><FontAwesomeIcon icon={faBolt} /> DAILY CHALLENGES</p>
                                                    <div className='apexChallengeCard'>
                                                        <div>
                                                            <p className='apexCardTitle'>Fifteen</p>
                                                            <p className='apexCardSub'>Ride at least 15 km today</p>
                                                            <p className='apexXP'>+ 300 XP</p>
                                                        </div>
                                                        <div className='apexCircle'></div>
                                                    </div>
                                                    <div className='apexChallengeCard'>
                                                        <div>
                                                            <p className='apexCardTitle'>Daily Ride</p>
                                                            <p className='apexCardSub'>Complete any route today</p>
                                                            <p className='apexXP'>+ 200 XP</p>
                                                        </div>
                                                        <div className='apexCircle'></div>
                                                    </div>
                                                    <div className='apexFilterRow'>
                                                        <div className='apexFilterLeft'>
                                                            <span className='apexFilterLabel'>Filter</span>
                                                            <span className='apexFilterBadge'>1</span>
                                                        </div>
                                                        <span className='apexFilterRight'>1 routes ▾</span>
                                                    </div>
                                                    <div className='apexRouteCard'>
                                                        <div className='apexRouteImg' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.45)), url(${apexbg})` }}></div>
                                                        <div className='apexRouteInfo'>
                                                            <p className='apexRouteName'>Test</p>
                                                            <p className='apexRouteDiff'>Medium</p>
                                                            <p className='apexRouteStats'>13.89 km · 56 min</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='apexBottomNav'>
                                                    <div className='apexNavItem apexNavActive'>
                                                        <FontAwesomeIcon icon={faHouse} />
                                                        <span>Home</span>
                                                    </div>
                                                    <div className='apexNavItem'>
                                                        <FontAwesomeIcon icon={faComments} />
                                                        <span>Chat</span>
                                                    </div>
                                                    <div className='apexNavItem apexNavCenter'>
                                                        <div className='apexNavCenterIcon'>
                                                            <FontAwesomeIcon icon={faMap} />
                                                        </div>
                                                        <span>Map</span>
                                                    </div>
                                                    <div className='apexNavItem'>
                                                        <FontAwesomeIcon icon={faUsers} />
                                                        <span>Community</span>
                                                    </div>
                                                    <div className='apexNavItem'>
                                                        <FontAwesomeIcon icon={faUser} />
                                                        <span>Profile</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='phoneHomeBar'></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='icon phoneIcon'>
                                    <FontAwesomeIcon icon={faCar}/>
                                    <h2>Apex</h2>
                                </div>
                            </div>
                            <div className='project-desc'>
                                <h2>PERN + React Expo</h2>
                                <p>(02/2026)</p>
                                <p>
                                    iOS/Android Mobile app for car enthusiasts. Users can discover and navigate GPS routes on an interactive map, chat in real time, follow others and share posts with analytics. The app also supports organizing car meets and includes a full authentication flow.
                                </p>
                                <div className='project-links'>
                                    <div className='github-private-wrap'>
                                        <span className='github-private-btn'>GitHub</span>
                                        <div className='github-tooltip'>
                                            This repository is private. The source code is available for review upon request — feel free to get in touch.
                                        </div>
                                    </div>
                                    <Link to={'/projects/details/apexroads'}>Details</Link>
                                    <Link to={'/projects/details/apexroads#gallery'}>Gallery</Link>
                                </div>
                            </div>
                        </li>
                        <li className='project'>
                            <div className='wrapImg'>
                                <div className='monitorImg truckMonitor' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.45)), url(${truckbg})`, backgroundColor: '#1f2937', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className='truckNav'>
                                        <span className={`truckLogo${showTasks ? ' truckLogoBack' : ''}`} onClick={showTasks ? () => setShowTasks(false) : undefined}>TruckApp</span>
                                        <div className='truckNavLinks'>
                                            <span>Trucks</span>
                                            <span className={`truckNavTasks${showTasks ? ' active' : ''}`} onClick={toggleTasks}>Tasks</span>
                                            <span>Workers</span>
                                            <span className='truckLogout'>LogOut</span>
                                        </div>
                                    </div>
                                    {showTasks ? (
                                        <div className='truckTasksPage'>
                                            <span className='truckTasksLabel'>Active tasks</span>
                                            {[
                                                { label: 'Get told that your app was made using AI', status: 'Active', statusColor: '#3b82f6', color: '#3b82f6' },
                                                { label: 'Learn to work with AI', status: 'Pending', statusColor: '#f59e0b', color: '#f59e0b' },
                                                { label: 'Get replaced by AI', status: 'Done', statusColor: '#10b981', color: '#10b981' },
                                                { label: 'Learn Express.js', status: 'Done', statusColor: '#10b981', color: '#10b981' },
                                                { label: 'Learn React', status: 'Done', statusColor: '#10b981', color: '#10b981' },
                                                { label: 'Learn JavaScript', status: 'Done', statusColor: '#10b981', color: '#10b981' },
                                            ].map(({ label, status, statusColor, color }, i) => (
                                                <div key={i} className='truckTaskRow'>
                                                    <div className='truckTaskDot' style={{ backgroundColor: color }}></div>
                                                    <span className='truckTaskRowLabel'>{label}</span>
                                                    <span className='truckTaskBadge' style={{ backgroundColor: statusColor }}>{status}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className='truckHeroText'>
                                            <p className='truckHeroTitle'>Truck Manager App</p>
                                            <p className='truckHeroSub'>Manage trucks, tasks & drivers.</p>
                                            <a href="https://lutonsky.eu/projects/truck_managment_app/" className='truckHeroBtn'>Find out more!</a>
                                        </div>
                                    )}
                                </div>
                                <div className='icon truckIcon'>
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
                                <p>(11/2025)</p>
                                <p>
                                    This is a work-in-progress application with separate login for managers and workers, using secure authentication (JWT) and password hashing (bcrypt).
                                    Managers can create tasks and manage trucks, while workers can view their assigned tasks.
                                </p>
                                <div className="project-links">
                                    <a className="live-btn" href={'https://lutonsky.eu/projects/truck_managment_app/'}>LIVE</a>
                                    <Link to={'https://github.com/lukaslgit/truck-management-app'} target="_blank" rel="noopener noreferrer">GitHub</Link>
                                    <Link to={'/projects/details/truckmanager'}>Details</Link>
                                </div>
                            </div>
                        </li>
                        <li className='project'>
                            <div className='wrapImg'>
                                <div className={`monitorImg${isDark ? ' darkmode' : ''}`}>
                                    <div className='searchBar'>
                                        <p>Vienna <strong>(AT)</strong></p>
                                        <div className='inputEl'>
                                            <input placeholder='Try me!'></input>
                                            <a href={'https://lutonsky.eu/projects/weatherapp/'}><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                                        </div>
                                        <button className='weatherDarkMode' onClick={toggleWeather}>
                                            <span className='weatherOrbitTrack'>
                                                <span
                                                    className='weatherOrbitPivot'
                                                    style={{ transform: `rotate(${orbitAngle}deg)` }}
                                                >
                                                    <span className='weatherOrbitIcon moonIcon' style={{ transform: `rotate(${-orbitAngle}deg)` }}>
                                                        <FontAwesomeIcon icon={faMoon} />
                                                    </span>
                                                    <span className='weatherOrbitIcon sunIcon' style={{ transform: `rotate(${-orbitAngle}deg)` }}>
                                                        <FontAwesomeIcon icon={faSun} />
                                                    </span>
                                                </span>
                                            </span>
                                        </button>
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
                                <div className='icon weatherIcon'>
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
                                <p>(08/2025)</p>
                                <p>{t.projectpage_main1}</p>
                                <div className="project-links">
                                    <a className="live-btn" href={'https://lutonsky.eu/projects/weatherapp/'}>LIVE</a>
                                    <Link to={'https://github.com/lukaslgit/weatherapp'} target="_blank" rel="noopener noreferrer">GitHub</Link>
                                    <Link to={'/projects/details/weatherapp'}>Details</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}