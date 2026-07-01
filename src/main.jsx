import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, Slide, Zoom, Flip } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
        <ToastContainer
            position="top-right"
            autoClose={3000}
            transition={Slide}
        />
    </BrowserRouter>
);

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
