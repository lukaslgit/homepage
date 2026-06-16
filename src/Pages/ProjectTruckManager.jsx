import { useState } from 'react';
import { Link } from 'react-router-dom';
import truckbg from '../assets/truckbg.jpg';
import '../Styles/project-detail.css';

export default function ProjectTruckManager() {
    const [role, setRole] = useState('manager');

    const managerFeatures = [
        'Create and assign tasks to workers',
        'Add, edit and remove trucks from the fleet',
        'Manage worker accounts',
        'Overview of all active and completed tasks',
        'Track truck availability and status',
    ];

    const workerFeatures = [
        'View assigned tasks with details',
        'Update task status (in progress / done)',
        'Access truck information for assigned tasks',
        'Simple and clean task dashboard',
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
                        TruckManager <span>— PERN Fullstack App (WIP)</span>
                    </h1>
                    <p>
                        A work-in-progress fleet management platform with separate
                        dashboards for managers and workers, built on the PERN stack.
                    </p>
                    <a
                        href='https://lutonsky.eu/projects/truck_managment_app/'
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
                    TruckManager is a fullstack application designed to streamline
                    fleet and task management for small logistics teams. Authentication
                    is handled with JWT tokens and passwords are secured with bcrypt.
                    The app separates concerns cleanly — managers get full control over
                    the fleet and task board, while workers see only what's relevant to them.
                </p>
            </div>

            <div className='pd-section pd-dark'>
                <h2>Features</h2>
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
                            <li>JWT — stateless authentication</li>
                            <li>bcrypt — password hashing</li>
                            <li>Role-based access control</li>
                        </ul>
                    </div>
                    <div className='pd-db'>
                        <h3>Database</h3>
                        <ul className='pd-list'>
                            <li>PostgreSQL</li>
                            <li>Relational schema</li>
                            <li>REST API via Express</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='pd-page-links'>
                <Link to='/projects'>← Back to Projects</Link>
                <a
                    href='https://lutonsky.eu/projects/truck_managment_app/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Live Demo
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
