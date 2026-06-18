import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

import './Styles/main.css';

const Homepage = lazy(() => import('./Pages/Homepage'));
const Projects = lazy(() => import('./Pages/Projects'));
const ProjectApexRoads = lazy(() => import('./Pages/ProjectApexRoads'));
const ProjectTruckManager = lazy(() => import('./Pages/ProjectTruckManager'));
const ProjectWeatherApp = lazy(() => import('./Pages/ProjectWeatherApp'));
const ProjectCityBoard = lazy(() => import('./Pages/ProjectCityBoard'));
const Contact = lazy(() => import('./Pages/Contact'));
const NotFound = lazy(() => import('./Pages/NotFound'));
const Eastereggs = lazy(() => import('./Pages/Eastereggs'));

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
            path: '/projects/details/cityboard',
            element: (
                <Suspense fallback={<></>}>
                    <Layout>
                        <ProjectCityBoard />
                    </Layout>
                </Suspense>
            ),
        },
        {
            path: '/projects/details/apexroads',
            element: (
                <Suspense fallback={<></>}>
                    <Layout>
                        <ProjectApexRoads />
                    </Layout>
                </Suspense>
            ),
        },
        {
            path: '/projects/details/truckmanager',
            element: (
                <Suspense fallback={<></>}>
                    <Layout>
                        <ProjectTruckManager />
                    </Layout>
                </Suspense>
            ),
        },
        {
            path: '/projects/details/weatherapp',
            element: (
                <Suspense fallback={<></>}>
                    <Layout>
                        <ProjectWeatherApp />
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
        {
            path: '/eastereggs',
            element: (
                <Suspense fallback={<></>}>
                    <Layout>
                        <Eastereggs />
                    </Layout>
                </Suspense>
            ),
        },
    ]);

    return <RouterProvider router={router} />;
}
