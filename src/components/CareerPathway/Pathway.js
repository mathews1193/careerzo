import React, { useState, useEffect } from 'react';
import firebase from '../../Firebase/firebase1';
import ProgressBar from "@ramonak/react-progress-bar";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import './Pathway.css';

function Pathway(userId) {

    const [employee, setEmployee] = useState([]);

    const ref = firebase.firestore().collection('employee').where("userId","==", userId);

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
                <img className="pic1" src={e.pic} alt="Logo" width="23%" height="30%"/>
                <div className="path-infor">
                    <h2 className="head">Current Level: {e.level} Level {e.position}</h2>
                    { e.percentage === 100 ? (
                    <h2 className="head">Promotion Requirements: Met</h2>
                    ) : (
                    <h2 className="head">Promotion Requirements: Not Met</h2>
               
                    )}
                    </div>
                <ProgressBar 
                completed={e.percentage}
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
