import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import { Home, About, Projects, Blog } from "../pages"

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
        ],
    },
]);

export default () => <RouterProvider router={ routes } />