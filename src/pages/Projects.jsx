import '../Styles/projects.css'
import weatherApp from '../assets/weatherapp.png';
import { Link } from "react-router-dom";
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                            <Link to={'/projects/weatherapp'}><div className='project-image' style={{ backgroundImage: `url(${weatherApp})` }}></div></Link>
                           <div className='icon'>
                            <FontAwesomeIcon icon={faCloud}/>
                            <h2>WeatherApp</h2>
                           </div>
                            </div>
                            <div className='project-desc'>
                                <h2>React + Express</h2>
                                <p> 
                                    A modern weather application built with a <strong>React</strong> frontend and an <strong>Express.js</strong> backend. The backend securely manages API keys and routes calls to third-party services like <strong>OpenWeatherMap</strong> (weather & forecasts) and <strong>Pixabay</strong> (background images).
                                    Deployed on a VPS with <strong>Ubuntu</strong> and <strong>Nginx</strong>, the app demonstrates hands-on experience with full-stack development, API integration, secure backend practices, and production deployment.
                                </p>
                                <div>
                                    <Link to={'/projects/weatherapp'}>LIVE</Link>
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