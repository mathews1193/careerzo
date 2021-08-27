import React,{ useState, useEffect } from 'react';
import firebase from '../../Firebase/firebase1';
import './Messager.css';

function Messager() {
    const [message, setMessage] = useState("");
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("");

    const createMsg = () => {
        firebase
        .firestore()
        .collection("message")
        .add({
        msg: message,
        to: to,
        from:from,
        })
        .then(ref => {
        console.log("Added document with ID: ", ref.id)
        })
    };
    return (
        <div className="background6">
            <h1 className="title">Message Board</h1>
            <input
            className="form1"
            required
            value={from}
            type="text"
            placeholder="From"
            onChange={(e) => {
            setFrom(e.target.value);
            }}
            />  
            <input
            className="form1"
            required
            value={to}
            type="text"
            placeholder="To"
            onChange={(e) => {
            setTo(e.target.value);
            }}
            />  
            <input
            className="form1"
            required
            value={message}
            type="text"
            placeholder="Message"
            onChange={(e) => {
            setMessage(e.target.value);
            }}
            />  

        </div>
    )
}

export default Messager
