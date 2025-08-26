import { Link } from "react-router-dom";
import '../Styles/homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faServer, faCode } from '@fortawesome/free-solid-svg-icons';

export default function Homepage(){
    return(
        <>
            <section className='top-section'>

                <div className='content'>
                    <h2>Lukas Lutonsky</h2>
                    <h1>FRONTEND DEVELOPER</h1>
                    <p> 
                        <strong>Junior frontend developer</strong> focused on building responsive and user-friendly web applications with <strong>React</strong>.
                        Skilled in <strong>JavaScript, TypeScript, React Router, Redux, and CSS/Sass.</strong>
                    </p>
                    <p>
                        I follow best practices and enjoy creating clean, maintainable code.
                        I also have experience deploying projects on VPS servers using <strong>Ubuntu and Nginx</strong>, giving me a solid understanding of how code moves from development to production.
                    </p>
                </div>
            </section>
            <section className='mid-section'>

                <div className='curve'>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>

                <div className='content'>
                    <Link to={'/contact'} className='box-content'>
                        <div className="icon">
                            <FontAwesomeIcon icon={faMobileAlt} />
                        </div>

                        <div className="box-text">
                            <h2>RESPONSIVE DESIGN</h2>
                            <p>I build web applications that look great and work seamlessly across all devices and screen sizes.</p>
                            <span className="fakeBtn">Contact Me!</span>
                        </div>
                    </Link>
                    <Link to={'/contact'} className='box-content'>
                        <div className="icon">
                            <FontAwesomeIcon icon={faServer} />
                        </div>

                        <div className="box-text">
                            <h2>BACKEND INTEGRATION</h2>
                            <p>Experience building and connecting secure APIs with Express, handling data flow efficiently between frontend and backend.</p>
                            <span className="fakeBtn">Contact Me!</span>
                        </div>
                    </Link>
                    <Link to={'/contact'} className='box-content'>
                        <div className="icon">
                            <FontAwesomeIcon icon={faCode} />
                        </div>

                        <div className="box-text">
                            <h2>MODERN TOOLS</h2>
                            <p>Experienced in React, Redux, React Router, TypeScript, and CSS/Sass to create interactive and efficient user interfaces.</p>
                            <span className="fakeBtn">Contact Me!</span>
                        </div>

                        
                    </Link>
                </div>
            </section>
            <section className="end-section">
                <div class="curve">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </section>
        </>
    )
}