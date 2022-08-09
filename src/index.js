import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';

// component file
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import NotMatch from './pages/NotMatch';

// stylesheet
import './App.css';
import Navbar from './components/Navbar';
import SinglePage from './pages/SinglePage';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoContainer />} />
          <Route path="about">
            <Route path="" element={<About />} />
            <Route path=":slug" element={<SinglePage />} />
          </Route>
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
