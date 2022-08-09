import React from "react"
import ReactDOM from "react-dom"
import { Routes, Route } from 'react-router-dom'

//component file
import TodoContainer from "./components/TodoContainer"
import About from "./pages/About"
import NotMatch from "./pages/NotMatch"

//stylesheet
import "./App.css"
import Navbar from "./components/Navbar";
import SinglePage from "./pages/SinglePage";
import { HashRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<TodoContainer />}></Route>
            <Route path='about'>
              <Route path='' element={<About />} />
              <Route path=':slug' element={<SinglePage />} />
            </Route>
            <Route path='*' element={<NotMatch />}></Route>
          </Routes>
        </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
)