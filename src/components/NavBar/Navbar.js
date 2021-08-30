import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(handleLogout) {
    return (
        <div>
            <nav className="navbar">
                <ul className="list">
                    <Link to="/home" className="nav">Home</Link>
                    <Link to="/dashboard" className="nav">Dashboard</Link>
                    <Link to="/profile" className="nav">Profile</Link>
                    <Link to="/messager" className="nav">Messager</Link>
                    <Link to="/"> <button className="btn-signin">Sign In</button> </Link>
                    <button onClick={handleLogout} className="btn-register">Sign Out</button>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
