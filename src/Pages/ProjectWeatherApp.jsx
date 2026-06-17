import { Link } from 'react-router-dom';
import '../Styles/project-detail.css';

export default function ProjectWeatherApp() {
    return (
        <div className='project-detail'>
            <div className='pd-hero pd-hero-weather'>
                <div>
                    <h1>
                        WeatherApp <span>— React + Express</span>
                    </h1>
                    <p>
                        A weather application that fetches real-time data from an
                        external API through a custom Express backend, with city search
                        and a dark mode toggle.
                    </p>
                    <a
                        href='https://lutonsky.eu/projects/weatherapp/'
                        className='pd-hero-btn'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        View Live
                    </a>
                </div>
            </div>

            <div className='pd-section'>
                <h2>About the project</h2>
                <p>
                    WeatherApp lets users search for any city and instantly view
                    current conditions — temperature, humidity, wind speed and
                    visibility — alongside a 24-hour hourly forecast. The Express
                    server acts as a proxy, keeping the API key off the client and
                    enabling server-side request handling.
                </p>
            </div>

            <div className='pd-section pd-dark'>
                <h2>Features</h2>
                <ul className='pd-list'>
                    <li>City search with real-time weather data</li>
                    <li>Current conditions — temperature, humidity, wind, visibility</li>
                    <li>24-hour hourly forecast view</li>
                    <li>Dark mode toggle</li>
                    <li>Responsive design</li>
                    <li>Express proxy — API key never exposed to the client</li>
                </ul>
            </div>

            <div className='pd-section'>
                <h2>Tech stack</h2>
                <div className='pd-features'>
                    <div>
                        <h3>Frontend</h3>
                        <ul className='pd-list'>
                            <li>React</li>
                            <li>Vite</li>
                            <li>SCSS</li>
                            <li>FontAwesome icons</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Backend</h3>
                        <ul className='pd-list'>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>OpenWeather API</li>
                            <li>dotenv — secret management</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='pd-page-links'>
                <Link to='/projects'>← Projects</Link>
                <a
                    href='https://lutonsky.eu/projects/weatherapp/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Live
                </a>
                <a
                    href='https://github.com/lukaslgit/weatherapp'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    GitHub
                </a>
            </div>
        </div>
    );
}
