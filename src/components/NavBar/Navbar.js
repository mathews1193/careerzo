import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <div>
            <nav className="navbar">
            <ul className="list">
                <Link to="/" className="nav">Home</Link>
                <Link to="/dashboard" className="nav">Dashboard</Link>
                <Link to="/career-pathway" className="nav">Career Pathway</Link>
                <Link to="/profile" className="nav">Profile</Link>
                <Link to="/messager" className="nav">Messager</Link>
                <Link to="/login"> <button className="btn-signin">Sign In</button> </Link>
                <Link to="/signup"> <button className="btn-register">New Employee</button> </Link>
            </ul>
            </nav>
        </div>
    )
}

export default Navbar
