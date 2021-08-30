import React, { useState } from 'react';
import firebase from '../../Firebase/firebase1';
import './Certification.css';

function Certification( userId ) {

    const [file, setFile] = useState("");
    const [issuer, setIssuer] = useState("");
    const [label, setLabel] = useState("");

    const saveFile = () => {
        firebase
        .firestore()
        .collection("Certifications")
        .add({
        userId: userId,
        Certification: label,
        issuer: issuer,
        file: file,
        })
        .then(ref => {
        console.log("Added document with ID: ", ref.id)
        })
    }

    return (
        <div>
            <div className="background7">
                <h1 className="title">Certifications</h1>
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
                value={file}
                onChange={(e) => setFile(e.target.value)}
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
