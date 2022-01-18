import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
        <Link to ="/home" className="brand">CLONE</Link>

        <nav>
            <ul>
                <li>
                    <Link className="link" to="/home">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/about">About</Link>
                </li>
                <li>
                    <Link className="link" to="/services">Services</Link>
                </li>
                <li>
                    <Link className="link" to="/features">Features</Link>
                </li>
                <li>
                    <Link className="link" to="/support">Support</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Navbar;
