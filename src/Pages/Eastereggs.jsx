import { useState, useEffect, useContext } from 'react';
import translationConfig from "../Locales/translation-config";
import { LanguageContext } from "../utils/LanguageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
import '../Styles/eastereggs.css';


export default function Eastereggs() {

    const { lang, setLang } = useContext(LanguageContext);

    const t = translationConfig[lang];

    const eggs = [
    {
        key: 'weatherToggled',
        name: `${t.easteregg1_name}`,
        hint: `${t.easteregg1_hint}`
    },
    {
        key: 'tasksClicked',
        name: `${t.easteregg2_name}`,
        hint: `${t.easteregg2_hint}`
    },
    {
        key: 'kagranClicked',
        name: `${t.easteregg3_name}`,
        hint: `${t.easteregg3_hint}`
    },
];

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
