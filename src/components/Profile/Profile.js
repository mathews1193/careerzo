import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div>
            <div> 
                <div className="background3">
                    <h1 className="title">Employee Profile</h1>
                    <div className="employee-form">
                        <input
                            className="form1"
                            id="profilePic"
                            required
                            type="text"
                            name="profilePic"
                            placeholder="Profile Picture"
                            /> 
                            <input
                            className="form1"
                            id="fullName"
                            required
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            />  
                            
                            <input
                            className="form1"
                            id="expertise-level"
                            required
                            type="text"
                            name="expertise-level"
                            placeholder="Expertise Level"
                            />

                            <input
                            className="form1"
                            id="Current Position"
                            required
                            type="text"
                            name="Current Position"
                            placeholder="Current Position"
                            />
                            <input
                            className="form1"
                            id="Department"
                            required
                            type="text"
                            name="Department"
                            placeholder="Department"
                            />
                            </div>
                            <div className="btn-container">
                                <button className="btn-save">Create Profile</button>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Profile
