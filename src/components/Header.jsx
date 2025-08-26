import { Link } from "react-router-dom";
import '../Styles/header.css';

export default function Header(){
    return(
        <header>
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