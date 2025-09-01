import '../Styles/projects.css'
import weatherApp from '../assets/weatherapp.png';
import { Link } from "react-router-dom";
import { faCloud, faMagnifyingGlass, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sun from '../assets/idkwhyiamdoingthis.png'

export default function Projects(){
    return(
        <section className="top-section">
            <div className='content'>
                <div className='title'>
                    <h1>PROJECTS</h1>
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
                                                    <p>22°C</p>
                                                </div>
                                            </div>
                                            <div className='el2'>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className='right'>
                                            <div className='el1'></div>
                                        </div>
                                    </div>
                                    <div className='weatherFooter'></div>
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
                                    A modern weather application built with a <strong>React</strong> frontend and an <strong>Express.js</strong> backend. The backend securely manages API keys and routes calls to third-party services like <strong>OpenWeatherMap</strong> (weather & forecasts) and <strong>Pixabay</strong> (background images).
                                    Deployed on a VPS with <strong>Ubuntu</strong> and <strong>Nginx</strong>, the app demonstrates hands-on experience with full-stack development, API integration, secure backend practices, and production deployment.
                                </p>
                                <div>
                                    <a href={'https://lutonsky.eu/projects/weatherapp/'}>LIVE</a>
                                    <Link to={'https://github.com/lukaslgit/weatherapp'} target="_blank" rel="noopener noreferrer">GitHub</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}