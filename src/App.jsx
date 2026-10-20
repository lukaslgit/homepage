import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

import './Styles/main.css';

const loaders = {
    Homepage: () => import('./Pages/Homepage'),
    Projects: () => import('./Pages/Projects'),
    ProjectApexRoads: () => import('./Pages/ProjectApexRoads'),
    ProjectTruckManager: () => import('./Pages/ProjectTruckManager'),
    ProjectWeatherApp: () => import('./Pages/ProjectWeatherApp'),
    ProjectCityBoard: () => import('./Pages/ProjectCityBoard'),
    Contact: () => import('./Pages/Contact'),
    NotFound: () => import('./Pages/NotFound'),
    Eastereggs: () => import('./Pages/Eastereggs'),
    Layout: () => import('./Components/Layout'),
};

// Modules fetched by preloadRoute; components found here render synchronously instead of suspending
const loaded = {};

function lazyRoute(name) {
    const Lazy = lazy(loaders[name]);
    return function LazyRoute(props) {
        const Loaded = loaded[name];
        return Loaded ? <Loaded {...props} /> : <Lazy {...props} />;
    };
}

const Homepage = lazyRoute('Homepage');
const Projects = lazyRoute('Projects');
const ProjectApexRoads = lazyRoute('ProjectApexRoads');
const ProjectTruckManager = lazyRoute('ProjectTruckManager');
const ProjectWeatherApp = lazyRoute('ProjectWeatherApp');
const ProjectCityBoard = lazyRoute('ProjectCityBoard');
const Contact = lazyRoute('Contact');
const NotFound = lazyRoute('NotFound');
const Eastereggs = lazyRoute('Eastereggs');

const Layout = lazyRoute('Layout');

const routePages = {
    '/': 'Homepage',
    '/projects': 'Projects',
    '/projects/details/cityboard': 'ProjectCityBoard',
    '/projects/details/apexroads': 'ProjectApexRoads',
    '/projects/details/truckmanager': 'ProjectTruckManager',
    '/projects/details/weatherapp': 'ProjectWeatherApp',
    '/contact': 'Contact',
    '/eastereggs': 'Eastereggs',
};

// Loads the chunks the current route needs before the first render, so the
// prerendered page is replaced in one step instead of going blank while chunks load
export async function preloadRoute(pathname) {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    const page = routePages[path] ?? 'NotFound';
    await Promise.all([page, 'Layout'].map(async (name) => {
        loaded[name] = (await loaders[name]()).default;
    }));
}

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

export default function App() {
    return <RouterProvider router={router} />;
}
