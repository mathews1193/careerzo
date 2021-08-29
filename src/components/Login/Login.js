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
                    <h1 className="title">Sign In</h1>
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
                    {hasAccount ? (
                      <>
                      <button onClick={handleLogin}>Sign In</button>
                      <p>Don't have an account? 
                      <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
                      </p>
                      </>
                      ) : (
                        <>
                        <button onClick={handleSignup}>Sign Up</button>
                        <p>Have an Account? 
                        <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
                        </p>
                        </>
                  )}
              </div>           
                        <p className="errorMsg">{passwordError}</p>
                    </div>
            </div>
        </div>
    )
}

export default Login
