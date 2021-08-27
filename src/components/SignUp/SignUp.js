import React,  { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './SignUp.css';

function SignUp() {
    const [user,setUser] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        <div>
            <div className="background2">
                <div className="form">
                    <h1 className="title">Create an Account</h1>
                    <div className="register-form">
                        <input
                            className="input1"
                            placeholder="Enter Username"
                            type="text"/>
                        <input
                            className="input1"
                            placeholder="Enter Password"
                            type="password"/>
                        <div className="btn-reg">
                            <Link to="/login"><button className="register-btn" type="submit" >Sign Up</button></Link>
                        </div>
                        <div className="btn-log">
                            <Link to="/login"><button className="btn-acct" type="submit" >Already have an account?</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
