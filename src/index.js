import React from "react"
import { BrowserRouter } from "react-router-dom"
import { createRoot } from "react-dom/client";
import './App.css'
//component file
import App from "./App"
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)