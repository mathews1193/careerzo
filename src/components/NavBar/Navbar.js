import React from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MicIcon from '@material-ui/icons/Mic';
import InfoIcon from '@material-ui/icons/Info';
import "./Navbar.css";

function Navbar(handleLogout, auth) {
    return (
        <div>
            <nav className="navbar">
                <ul className="list">
                    <Link to="/home" className="nav"><HomeIcon style={{fontSize: 35}} /> Home</Link>
                    <Link to="/dashboard" className="nav"><AccountCircleIcon style={{fontSize: 35}} /> Dashboard</Link>
                   <Link to="/profile" className="nav"><InfoIcon style={{fontSize: 35}} /> Profile</Link> 
                   <Link to="/voice-assistant" className="nav"><MicIcon style={{fontSize: 35}} /> Voice Assistant</Link>
                    {auth ? (
                        <Link to="/"> <button className="btn-signin">Sign In</button> </Link>
                    ):(
                        <button onClick={handleLogout} className="btn-register">Sign Out</button>
                    )} 
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
