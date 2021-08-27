import React, { useState, useEffect } from 'react';
import firebase from '../../Firebase/firebase1';
import ProgressBar from "@ramonak/react-progress-bar";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import './Pathway.css';

function Pathway() {

    const [employee, setEmployee] = useState([]);

    const img = [
        'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ]; 

    const ref = firebase.firestore().collection('employee');

    const getEmployee = () => {
        ref.onSnapshot((querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push(doc.data());
          });
          setEmployee(list);
        });
      };

      useEffect(() => {
        getEmployee();
        // eslint-disable-next-line
      }, []);

    return (
        <div>
            {employee.map((e) => (
            <div className="background5">
                <h1 className="title">Career Pathway: {e.name}</h1>
                <img src={img[0]} alt="Logo" width="23%" height="30%"/>
                <div className="path-infor">
                    <h2 className="head">Current Level: {e.level} Level {e.position}</h2>
                    <h2 className="head">Promotion Requirements: Not Meet</h2>
                </div>

                <ProgressBar 
                completed={45}
                bgColor={'#eafa04e3'}
                labelColor={'black'}
                height={'110%'}
                width={'75%'}
                margin={'0 auto'}
                />

                { e.level === "Entry" ? (
                <div className="level">
                    <h2 className="head">Entry Level {e.position}</h2> 
                    <h2 className="head">Mid Level {e.position}</h2>
                    <h2 className="head">Next Level Promotion</h2>
                    <h2 className="head">Senior Level {e.position}</h2>
                    <p className="head">Reach Mid Level Position First!</p> 
                </div>
                ) : ( e.level === "Mid") ? (
                <div className="level">
                    <h2 className="head"> <AssignmentTurnedInIcon /> Entry Level {e.position}</h2> 
                    <h2 className="head">Mid Level {e.position}</h2>
                    <h2 className="head">Senior Level {e.position}</h2>
                    <p className="head">Next Level Promotion!</p>
                </div>
                ) : (
                <div className="level">
                    <h2 className="head"><AssignmentTurnedInIcon /> Entry Level {e.position}</h2> 
                    <h2 className="head"><AssignmentTurnedInIcon /> Mid Level {e.position}</h2>
                    <h2 className="head">Senior Level {e.position}</h2>
                </div>
                )}
            </div>
            ))}
        </div>
    )
}

export default Pathway
