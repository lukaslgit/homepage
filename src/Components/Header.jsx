import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../Styles/header.css';

export default function Header(){

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <header className={scrolled ? "scrolled" : ""}>
                <div className="header-container">
                    <Link to={'/'} className="header-logo">Web developer</Link>
                    <nav>
                        <ul>
                            <li><Link to={'/'}>HOME</Link></li>
                            <li><Link to={'/projects'}>PROJECTS</Link></li>
                            <li><Link to={'/contact'}>CONTACT</Link></li>
                        </ul>
                    </nav>
                    <div className="header-right">
                        <Link to={'/contact'} className="header-btn">GET IN TOUCH</Link>
                        <button>DARKMODE</button>
                    </div>
                </div>
        </header>
    )
}