import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Whisk & Bloom</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">AI</Link>
                </li>
                <li>
                    <Link to="/pantry">Pantry</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
