import './navbar.css';
import React from 'react'
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "flex",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    textDecoration: "none",
    color: "black",
  };

function NavBar () {
    return (
        <div className="navigation">
        
          <div className="logo">
          <NavLink
            to="/"
            style={linkStyles}
            activeStyle={{
              background: "pink",
            }}
          >
            TMLink
          </NavLink>
          </div>
        
        <div className="navigation-items">
        <div className='item'>
          <NavLink
            to="/"
            style={linkStyles}
            activeStyle={{
              background: "black",
            }}
          >
            Home
          </NavLink>
        </div>

        <div className='item'>
          <NavLink
            to="/reviews"
            style={linkStyles}
            activeStyle={{
              background: "black",
            }}
          >
           Reviews 
           </NavLink>

        </div>

        <div className='item'>
          <NavLink
            to="/stories"
            style={linkStyles}
            activeStyle={{
              background: "black",
            }}
          >
           Stories
           </NavLink>
        </div>

        <div className='item'>
          <NavLink
            to="/mentors"
            style={linkStyles}
            activeStyle={{
              background: "black",
            }}
          >
           Mentors
          </NavLink>
        </div>
    
        <div className='item'>
          <NavLink
            to="/support"
            style={linkStyles}
            activeStyle={{
              background: "black",
            }}
          >
            Support
          </NavLink>
        </div>
        </div>
        </div>
      );
}
export default NavBar;