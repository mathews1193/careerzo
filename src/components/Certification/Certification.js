import React, { useState } from 'react';
import './Certification.css';

function Certification() {
    const [file, setFile] = useState("");
    return (
        <div>
            <div className="background7">
                <h1 className="title">Certifications</h1>

                <input
                className="input3"
                placeholder="Certification Name"
                value={file}
                onChange={(e) => setFile(e.target.value)}
                type="text"
                />
                <input
                className="input3"
                placeholder="Employee ID"
                value={file}
                onChange={(e) => setFile(e.target.value)}
                type="text"
                />

                <input
                className="input3"
                value={file}
                onChange={(e) => setFile(e.target.value)}
                type="file"
                />
                <div className="btn-container">
                    <button className="btn-save">Upload File</button>
                </div>
            </div>
        </div>
    )
}

export default Certification
