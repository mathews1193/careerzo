import React from 'react'
import { Link } from "react-router-dom"
import './Login.css';

function Login() {
    return (
        <div>
            <div className="background4">
                <div className="login">
                    <h1 className="title">Sign In</h1>
                    <div className="input-form">
                        <input
                        className="input2"
                        placeholder="Enter Username"
                        type="text"
                        />
                        <input
                        className="input2"
                        placeholder="Enter Password"
                        type="password"
                        />
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
