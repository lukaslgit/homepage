import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
import '../Styles/eastereggs.css';

const eggs = [
    {
        key: 'weatherToggled',
        name: 'Useless Darkmode',
        hint: 'Found on the Projects page — try clicking the button inside the WeatherApp mockup.',
    },
    {
        key: 'tasksClicked',
        name: 'Tasks?',
        hint: 'Found on the Projects page — click on "Tasks" in the TruckApp navigation bar.',
    },
];

export default function Eastereggs() {
    const [unlocked, setUnlocked] = useState({});

    useEffect(() => {
        const state = {};
        eggs.forEach(e => {
            state[e.key] = !!window.localStorage.getItem(e.key);
        });
        setUnlocked(state);
    }, []);

    const unlockedCount = Object.values(unlocked).filter(Boolean).length;

    return (
        <section className='ee-section'>
            <div className='content'>
                <h2>Hidden</h2>
                <h1>Easter Eggs</h1>

                <div className='ee-intro'>
                    <p>
                        You can find small easter eggs across my portfolio!
                    </p>
                    <p>Explore, click on things that look interesting, and see if you can unlock them all.</p>
                    <p>There aren't many of them yet.</p>
                    <span className='ee-counter'>{unlockedCount} / {eggs.length} unlocked</span>
                </div>

                <ul className='ee-list'>
                    {eggs.map(egg => {
                        const isUnlocked = unlocked[egg.key];
                        return (
                            <li key={egg.key} className={`ee-item${isUnlocked ? ' ee-unlocked' : ' ee-locked'}`}>
                                <div className='ee-icon-wrap'>
                                    <FontAwesomeIcon icon={isUnlocked ? faCheck : faLock} />
                                </div>
                                <div className='ee-info'>
                                    <p className='ee-name'>{egg.name}</p>
                                    {isUnlocked
                                        ? <p className='ee-hint'>{egg.hint}</p>
                                        : <p className='ee-hint'>Not yet discovered.</p>
                                    }
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
