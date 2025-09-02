    import { createBrowserRouter, RouterProvider } from "react-router-dom";

    import Homepage from './pages/Homepage';
    import Projects from './pages/Projects';
    import Contact from "./Components/Contact";
    import NotFound from './pages/NotFound';
    import Layout from './Components/Layout';

    import './Styles/main.css';


export default function App(){


    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout><Homepage /></Layout>,
            errorElement: <Layout><NotFound /></Layout>,
        },
        {
            path: '/projects',
            element: <Layout><Projects /></Layout>
        },
        {
            path: '/contact',
            element: <Layout><Contact /></Layout>
        }
    ])

    return(
        <RouterProvider router={router}/>
    )
}