import React, { useState, useEffect }from 'react';
import firebase from '../../Firebase/firebase1';
import { storage } from '../../Firebase/firebase1';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './Profile.css';

toast.configure();

function Profile( userId ) {
    const [image, setImage]= useState(null);
    const [name, setName] = useState("");
    const [level, setLevel] = useState("");
    const [position, setPosition] = useState("");
    const [department, setDepartment] = useState("");
    const [percentage, setPercentage] = useState(0);
    const [profile, setProile]= useState([]);

    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

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

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
        
    const createProfile = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
        "state_changed",
        snapshot => {
            const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
        },
        error => {
            console.log(error);
        },
        () => {
            storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
                setUrl(url);
            });
        }
        );

        firebase
        .firestore()
        .collection("employee")
        .add({
        pic: url,
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

      console.log("image: ", image);

    return (
        <div>
            <div> 
                <div className="background3">
                    <h1 className="title">Employee Profile</h1>
                    {profile.map((p) => (
                    <div className="profile">
                        <img className="pic" src={p.pic|| "http://via.placeholder.com/300"} alt="profile-pic" />
                        <h2>{p.name}</h2>
                        <h2>Level: {p.level}</h2>
                        <h2>Department: {p.department}</h2>
                        <h2>Position: {p.position}</h2>
                    </div>
                    ))};
                    <div className="employee-form">
                        <progress value={progress} max="100" />
                        <input
                            className="form1"
                            required
                            type="file"
                            placeholder="Profile Picture"
                            onChange={handleChange}
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
