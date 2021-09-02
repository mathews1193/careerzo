import React, { useState, useEffect }from 'react';
import firebase from '../../Firebase/firebase1';
import { storage } from '../../Firebase/firebase1';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './Profile.css';

toast.configure();

function Profile( userId ) {
    const[img, setImg]= useState(null);
    const [name, setName] = useState("");
    const [level, setLevel] = useState("");
    const [position, setPosition] = useState("");
    const [department, setDepartment] = useState("");
    const[percentage, setPercentage] = useState();
    const [profile, setProile]= useState([]);

    const ref = firebase.firestore().collection('employee').where("userId","==", userId);

    const getProfile = () => {
        ref.onSnapshot((querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push(doc.data());
          });
          setProile(list);
        });
      };
        
    const createProfile = () => {
        firebase
        .firestore()
        .collection("employee")
        .add({
        userId: userId,
        name: name,
        level: level,
        department:department,
        percentage:percentage,
        position: position,
        })
        .then(ref => {
        console.log("Added document with ID: ", ref.id)
        toast.success("Profile Created Successfully!", {
            theme:"colored"
        });
        })
    };

    useEffect(() => {
       getProfile();
        // eslint-disable-next-line
      }, []);

    return (
        <div>
            <div> 
                <div className="background3">
                    <h1 className="title">Employee Profile</h1>
                    {profile.map((p) => (
                    <div className="profile">
                        <h2>image</h2>
                        <h2>{p.name}</h2>
                        <h2>Level: {p.level}</h2>
                        <h2>Department: {p.department}</h2>
                        <h2>Position: {p.position}</h2>
                    </div>
                    ))};
                    <div className="employee-form">
                        <input
                            className="form1"
                            required
                            value={img}
                            type="file"
                            placeholder="Profile Picture"
                            onChange={(e) => {
                                setImg(e.target.files[0]);
                            }}
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
