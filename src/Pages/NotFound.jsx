import { Link } from "react-router-dom"
import '../Styles/not-found.css'

export default function NotFound(){
    return(
        <div className='not-found'>
            <p className='not-found-code'>404</p>
            <h1 className='not-found-title'>Page not found</h1>
            <p className='not-found-msg'>
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to={'/'} className='not-found-btn'>Go home</Link>
        </div>
    )
}