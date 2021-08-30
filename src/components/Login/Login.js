import React,  { useState, useEffect }from 'react'
import './Login.css';

function Login(props) {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        } = props;

    return (
        <div>
            <div className="background4">
                <div className="login">
                {hasAccount ? (
                    <h1 className="title">Sign In</h1> 
                ) : (
                    <h1 className="title">Create An Account</h1>
                ) }
                    <div className="input-form">
                        <input
                        className="input2"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        />

                        <p className="errorMsg">{emailError}</p>

                        <input
                        className="input2"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        />

                        <p className="errorMsg">{passwordError}</p>

                    {hasAccount ? (
                    
                        <div className="btn-button">
                            <button className="btn-login" onClick={handleLogin}>Sign In</button>
                            <p>Don't have an account? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
                            </p>
                        </div>
                    ) : (
                        <div className="btn-button">
                        <button className="btn-login" onClick={handleSignup}>Sign Up</button>
                        <p>Have an Account? 
                        <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
                        </p>
                        </div>
                    )}
                    </div>           
                        
                </div>
            </div>
        </div>
    )
}

export default Login
