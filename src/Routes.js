import React from "react";
import { useRoutes } from "react-router-dom";
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";

export const Routes = () => {
    const PublicRoute = [
        {
            children: [
                { path: "/", element: <Home /> },
                { path: "/about", element: <About /> },
                { path: "*", element: <Error /> },
                { path: "/Projects", element: <Projects /> }
            ],
        },
    ];

    return useRoutes(PublicRoute);
};
