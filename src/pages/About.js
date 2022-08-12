/* eslint-disable */ 
import React from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {
  console.log(props);
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to="about-app">About App</Link>
        </li>
        <li>
          <Link to="about-author">About Author</Link>
        </li>
      </ul>
    </div>
  );
};
export default About;
