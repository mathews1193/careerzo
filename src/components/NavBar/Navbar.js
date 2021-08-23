import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <ul>
                <Link to="/" className="nav">Home</Link>
                <Link to="/dashboard" className="nav">Dashboard</Link>
                <Link to="/career-pathway" className="nav">Career Pathway</Link>
                <Link to="/profile" className="nav">Profile</Link>
                <Link to="/messager" className="nav">Messager</Link>
                <Link to="/login"> <button className="btn-signin">Sign In</button> </Link>
                <Link to="/register"> <button className="btn-register">New Employee</button> </Link>
            </ul>
        </div>
    )
}

export default Navbar