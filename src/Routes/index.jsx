import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import { Home, About, Projects } from "../pages"

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
        ],
    },
]);

export default () => <RouterProvider router={ routes } />