import React from 'react';
import './Navbar.css';
import { navigationItems } from "../data";

const Navbar = () => {
  return (
    <div className="navbar">
      <p>From Navbar component. This will display nested navbar</p>
      <ul className="navbar_list">
        {navigationItems.map((item, index) => (
          <li key={index} className="navbar_item">{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
