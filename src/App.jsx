import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

import './Styles/main.css';

const Homepage = lazy(() => import('./Pages/Homepage'));
const Projects = lazy(() => import('./Pages/Projects'));
const Contact = lazy(() => import('./Pages/Contact'));
const NotFound = lazy(() => import('./Pages/NotFound'));

const Layout = lazy(() => import('./Components/Layout'));

export default function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <Suspense fallback={<></>}>
                    <Layout>
                        <Homepage />
                    </Layout>
                </Suspense>
            ),
            errorElement: (
                <Suspense fallback={<></>}>
                    <Layout>
                        <NotFound />
                    </Layout>
                </Suspense>
            ),
        },
        {
            path: '/projects',
            element: (
                <Suspense fallback={<></>}>
                    <Layout>
                        <Projects />
                    </Layout>
                </Suspense>
            ),
        },
        {
            path: '/contact',
            element: (
                <Suspense fallback={<></>}>
                    <Layout>
                        <Contact />
                    </Layout>
                </Suspense>
            ),
        },
    ]);

    return <RouterProvider router={router} />;
}
