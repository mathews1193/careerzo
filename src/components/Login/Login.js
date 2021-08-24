import React from 'react'
import { Link } from "react-router-dom"
import './Login.css';

function Login() {
    return (
        <div>
            <div className="background">
                <div className="login">
                    <h1 className="header">Sign In</h1>
                    <div className="input-form">
                        <p className="user">Username</p>
                        <input
                            className="input1"
                            placeholder="Enter Username"
                            type="text"/>
                        <p className="p1">Password</p>
                        <input
                            className="input1"
                            placeholder="Enter Password"
                            type="password"/>
                    </div>
                    <div className="btn-button">
                        <button className="btn-login" type="submit" >Login</button>
                    </div>
                    <div className="btn-button2">
                        <Link to="/register"> <button className="btn-create" type="submit">Create an Account</button> </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
