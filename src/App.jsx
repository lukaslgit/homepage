
    import React from "react";
    import { createBrowserRouter, RouterProvider } from "react-router-dom";

    import Homepage from './pages/Homepage';
    import Projects from './pages/Projects';
    import NotFound from './pages/NotFound';


export default function App(){

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Homepage />,
            errorElement: <NotFound />,
        },
        {
            path: '/projects',
            element: <Projects />
        }
    ])

    return(
        <RouterProvider router={router}/>
    )
}