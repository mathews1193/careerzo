import React from 'react'
import { Link } from "react-router-dom"
import './SignUp.css';

function SignUp() {
    return (
        <div>
            <div className="background2">
                <div className="form">
                    <h1 className="title">Create an Account</h1>
                    <div className="register-form">
                        <h1 className="register">Username</h1>
                        <input
                            className="input"
                            placeholder="Enter Username"
                            type="text"/>
                        <h1 className="register">Password</h1>
                        <input
                            className="input"
                            placeholder="Enter Password"
                            type="password"/>
                        <div className="btn-reg">
                            <Link to="/login"><button className="register-btn" type="submit" >Sign Up</button></Link>
                        </div>
                        <div className="btn-log">
                            <Link to="/login"><button className="acct-butt" type="submit" >Already have an account?</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
