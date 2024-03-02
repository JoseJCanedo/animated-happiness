import React, {Component} from "react";
import ReactDom from "react-dom/client";
import AppContainer from "./containers/AppContainer"
import XkcdCurrentContainer from "./containers/xkcd/XkcdCurrentContainer"
import XkcdPastContainer from "./containers/xkcd/XkcdPastContainer"
import XkcdArrayRespEx from "./containers/xkcd/XkcdArrayRespEx"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
    {
        path:"/",
        element:<AppContainer />,
        children: [
            {
              index: true,
              element: <div> Empty Index </div>
            },
            {
                path:"currentxkcdcomic",
                element:<XkcdCurrentContainer />
            },
            {
                path:"pastxkcdcomic",
                element:<XkcdPastContainer />
            },
            {
                path: "example",
                element: <XkcdArrayRespEx />
            }
        ]
    }

])


ReactDom.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
