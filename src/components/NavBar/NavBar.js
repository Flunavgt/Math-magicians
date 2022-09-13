import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <div className="NavBar">
    <div>
      <h1>Math Magicians</h1>
    </div>
    <div className="links">
      <Link to="/Home" className="home">Home</Link>
      <Link to="/Calculator" className="calculator">Calculator</Link>
      <Link to="/Quote" className="home">Quote</Link>
    </div>
  </div>
);

export default NavBar;
