import React, { Children } from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom";

import { StrictMode } from "react";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import VoterLoginForm from "./components/login.jsx";
import VoterSignupForm from "./components/signup.jsx";
import Dashboard from "./components/elect.jsx";
import ElectionResults from "./components/vresults.jsx";
import ResultPage from "./components/result.jsx";
import ElectionPage1 from "./components/pole.jsx";
import Home from "./components/hero.jsx";
import AdminDashboard from "./components/Admindashboard.jsx";

const router = createBrowserRouter([
  {
   path: "/",
    element: <App/>,
    children: [
         {path: "/", element: <Home/>},
       {path: "/login", element: <VoterLoginForm/>},
         {path: "/signup", element: <VoterSignupForm/>},
         {path: "/dashboard", element: <Dashboard/>},
         {path: "/results", element: <ResultPage/>},
           {path: "/pole", element: <ElectionPage1/>},
           {path: "/admindashboard", element: <AdminDashboard/>},
         
    ],

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
