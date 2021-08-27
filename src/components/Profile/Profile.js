import React, { useState }from 'react';
import firebase from '../../Firebase/firebase1';
import './Profile.css';

function Profile() {
    const [name, setName] = useState("");
    const [level, setLevel] = useState("");
    const [position, setPosition] = useState("");
    const [department, setDepartment] = useState("");
        
    const createProfile = () => {
        firebase
        .firestore()
        .collection("employee")
        .add({
        name: name,
        level: level,
        department:department,
        position: position,
        })
        .then(ref => {
        console.log("Added document with ID: ", ref.id)
        })
    };

    return (
        <div>
            <div> 
                <div className="background3">
                    <h1 className="title">Employee Profile</h1>
                    <div className="employee-form">
                        <input
                            className="form1"
                            required
                            type="text"
                            placeholder="Profile Picture"
                            /> 

                            <input
                            className="form1"
                            required
                            value={name}
                            type="text"
                            placeholder="Full Name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            />  
                            
                            <input
                            className="form1"
                            required
                            value={level}
                            type="text"
                            placeholder="Expertise Level"
                            onChange={(e) => {
                                setLevel(e.target.value);
                            }}
                            />

                            <input
                            className="form1"
                            required
                            value={position}
                            type="text"
                            placeholder="Current Position"
                            onChange={(e) => {
                                setPosition(e.target.value);
                            }}
                            />
                            <input
                            className="form1"
                            required
                            value={department}
                            type="text"
                            placeholder="Department"
                            onChange={(e) => {
                                setDepartment(e.target.value);
                            }}
                            />
                            </div>
                            <div className="btn-container">
                                <button onClick={createProfile} className="btn-save">Create Profile</button>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Profile
