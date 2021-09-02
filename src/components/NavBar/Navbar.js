import React from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MicIcon from '@material-ui/icons/Mic';
import InfoIcon from '@material-ui/icons/Info';
import "./Navbar.css";

function Navbar(props) {
    const {handleLogout ,user} = props;
    return (
        <div>
            {user ? (
            <nav className="navbar">
                <ul className="list">
                    <Link to="/" className="nav"><HomeIcon style={{fontSize: 35}} /> Home</Link>
                    <Link to="/dashboard" className="nav"><AccountCircleIcon style={{fontSize: 35}} /> Dashboard</Link>
                    <Link to="/profile" className="nav"><InfoIcon style={{fontSize: 35}} /> Profile</Link> 
                    <Link to="/voice-assistant" className="nav"><MicIcon style={{fontSize: 35}} /> Voice Assistant</Link>
                    <Link to="/login"> <button className="btn-signin">Sign In</button> </Link>
                    <button onClick={handleLogout} className="btn-register">Sign Out</button>
                </ul>
            </nav>
            ):(
            <nav className="navbar">
                <ul className="list">
                    <h3 className="nav"><HomeIcon style={{fontSize: 30}} /> CareerZo</h3>
                    <h3 className="nav">Welcome, Please Create An Acccount or Login First!</h3>
                    <Link to="/login"> <button className="btn-signin">Sign In</button> </Link>
                </ul>
            </nav>
            )}
        </div>
    )
}

export default Navbar
