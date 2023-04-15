import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Home";
import Spending from "./components/Spending";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import Login from "./components/Login";
import Signup from "./components/Signup";

//--------------Providers----------------

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/spending",
        element: <Spending />,
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
]);

const queryClient = new QueryClient();

//-----------------App-----------------

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
);
