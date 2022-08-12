import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import TodoContainer from './components/TodoContainer';
import Navbar from './components/Navbar';
import SinglePage from './pages/SinglePage';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<TodoContainer />} />
      <Route path="about/*" element={<About />}>
        <Route path=":slug" element={<SinglePage />} />
      </Route>
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </>
);

export default App;
