import React, { useState } from 'react';
import firebase from '../../Firebase/firebase1';
import { storage } from '../../Firebase/firebase1'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './Certification.css';

toast.configure();

function Certification( userId ) {

    const [file, setFile] = useState(null);
    const [issuer, setIssuer] = useState("");
    const [label, setLabel] = useState("");

    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    const handleChange = e => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const saveFile = () => {

        const uploadTask = storage.ref(`certifications/${file.name}`).put(file);
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
            .ref("certifications")
            .child(file.name)
            .getDownloadURL()
            .then(url => {
                setUrl(url);
            });
        }
        );
        console.log(url);

        firebase
        .firestore()
        .collection("Certifications")
        .add({
        userId: userId,
        Certification: label,
        issuer: issuer,
        file: url,
        })
        .then(ref => {
        console.log("Added document with ID: ", ref.id)
        toast.success("Document Uploaded Successfully!", {
            theme:"colored"
        });
        })
    };

    return (
        <div>
            <div className="background7">
                <h1 className="title">Certifications</h1>
                <progress value={progress} max="100" />

                <input
                className="input3"
                placeholder="Certification Name"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                type="text"
                />
                <input
                className="input3"
                placeholder="Issuer"
                value={issuer}
                onChange={(e) => setIssuer(e.target.value)}
                type="text"
                />

                <input
                className="input3"
                required
                placeholder="Document"
                onChange={handleChange}
                type="file"
                />
                <div className="btn-container">
                    <button onClick={saveFile}className="btn-save">Upload Document</button>
                </div>
            </div>
        </div>
    )
}

export default Certification
