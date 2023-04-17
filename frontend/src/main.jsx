import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Home";
import Budget from "./components/Budget";
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
import NewBudget from "./components/NewBudget";

//--------------Providers----------------

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/budget",
        element: <Budget />,
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/newbudget", element: <NewBudget /> },
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
