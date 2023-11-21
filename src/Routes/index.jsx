import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import { Home, About, Projects, Blog, CommunityWall, Stats, Resume } from "../pages"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'community',
                element: <CommunityWall />
            },
            {
                path: 'stats',
                element: <Stats />
            },
            {
                path: 'resume',
                element: <Resume />
            },
        ],
    },
]);

export default () => <RouterProvider router={ routes } />