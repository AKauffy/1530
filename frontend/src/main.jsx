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
