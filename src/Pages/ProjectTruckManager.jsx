import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import truckbg from '../assets/truckbg.jpg';
import '../Styles/project-detail.css';
import translationConfig from "../Locales/translation-config";
import { LanguageContext } from "../utils/LanguageContext";

export default function ProjectTruckManager() {
    
    const { lang, setLang } = useContext(LanguageContext);
    const t = translationConfig[lang];

    const [role, setRole] = useState('manager');

    const managerFeatures = [
        t.truckapp_managerFeatures1,
        t.truckapp_managerFeatures2,
        t.truckapp_managerFeatures3,
        t.truckapp_managerFeatures4,
        t.truckapp_managerFeatures5,
    ];

    const workerFeatures = [
        t.truckapp_workerFeatures1,
        t.truckapp_workerFeatures2,
        t.truckapp_workerFeatures3,
        t.truckapp_workerFeatures4,
    ];

    const techStack = ['PostgreSQL', 'Express.js', 'React', 'Node.js'];

    return (
        <div className='project-detail'>
            <div
                className='pd-hero'
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url(${truckbg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div>
                    <h1>
                        TruckManager <span>- PERN Fullstack App (WIP)</span>
                    </h1>
                    <p>
                        {t.truckapp_desc}
                    </p>
                    <a
                        href='https://lutonsky.eu/projects/truck_managment_app/'
                        className='pd-hero-btn'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {t.viewLive}
                    </a>
                </div>
            </div>

            <div className='pd-section'>
                <h2>{t.about_the_project}</h2>
                {t.truckapp_about_desc}
            </div>

            <div className='pd-section pd-dark'>
                <h2>{t.features}</h2>
                <div className='pd-tabs'>
                    <button
                        className={role === 'manager' ? 'active' : ''}
                        onClick={() => setRole('manager')}
                    >
                        Manager
                    </button>
                    <button
                        className={role === 'worker' ? 'active' : ''}
                        onClick={() => setRole('worker')}
                    >
                        Worker
                    </button>
                </div>
                <div className='pd-tabs-content'>
                    <ul className={`pd-list${role !== 'manager' ? ' pd-list-inactive' : ''}`}>
                        {managerFeatures.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                    <ul className={`pd-list${role !== 'worker' ? ' pd-list-inactive' : ''}`}>
                        {workerFeatures.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                </div>
            </div>

            <div className='pd-section'>
                <h2>Tech stack</h2>
                <div className='pd-features'>
                    <div>
                        <h3>Stack</h3>
                        <ul className='pd-list'>
                            {techStack.map((t, i) => (
                                <li key={i}>{t}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Security</h3>
                        <ul className='pd-list'>
                            <li>JWT - stateless authentication</li>
                            <li>bcrypt - password hashing</li>
                            <li>Role-based access control</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Database</h3>
                        <ul className='pd-list'>
                            <li>PostgreSQL</li>
                            <li>Relational schema</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='pd-page-links'>
                <Link to='/projects'>← Projects</Link>
                <a
                    href='https://lutonsky.eu/projects/truck_managment_app/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Live
                </a>
                <a
                    href='https://github.com/lukaslgit/truck-management-app'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    GitHub
                </a>
            </div>
        </div>
    );
}
