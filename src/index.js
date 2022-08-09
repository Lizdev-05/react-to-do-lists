import React from "react"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom"
import './App.css'
//component file
import TodoContainer from "./components/TodoContainer"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)