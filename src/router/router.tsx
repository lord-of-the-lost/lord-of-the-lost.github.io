import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "*", element: <NotFound /> },
            ],
        },
    ],
    // basename берётся из vite base (см. vite.config.ts), чтобы
    // роутер работал на GitHub Pages по адресу /githubPage/.
    { basename: import.meta.env.BASE_URL }
)
