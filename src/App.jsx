
    import React from "react";
    import { createBrowserRouter, RouterProvider } from "react-router-dom";

    import Homepage from './pages/Homepage';
    import Projects from './pages/Projects';
    import NotFound from './pages/NotFound';
    import Layout from './components/Layout';


export default function App(){

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout><Homepage /></Layout>,
            errorElement: <NotFound />,
        },
        {
            path: '/projects',
            element: <Layout><Projects /></Layout>
        }
    ])

    return(
        <RouterProvider router={router}/>
    )
}