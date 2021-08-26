import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import './Pathway.css';

function Pathway() {
    var position = "Foreman";
    var level = "Mid";
    var name = "Steve Rogers";
    const img = [
        'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ]; 

    return (
        <div>
            <div className="background5">
                <h1 className="title">Career Pathway: {name}</h1>
                <img src={img[0]} alt="Logo" width="23%" height="30%"/>
                <div className="path-infor">
                    <h2 className="head">Current Level: {level} Level {position}</h2>
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

                { level === "Entry" ? (
                <div className="level">
                    <h2 className="head">Entry Level {position}</h2> 
                    <h2 className="head">Mid Level {position}</h2>
                    <h2 className="head">Next Level Promotion</h2>
                    <h2 className="head">Senior Level {position}</h2>
                    <p className="head">Reach Mid Level Position First!</p> 
                </div>
                ) : ( level === "Mid") ? (
                <div className="level">
                    <h2 className="head"> <AssignmentTurnedInIcon /> Entry Level {position}</h2> 
                    <h2 className="head">Mid Level {position}</h2>
                    <h2 className="head">Senior Level {position}</h2>
                    <p className="head">Next Level Promotion!</p>
                </div>
                ) : (
                <div className="level">
                    <h2 className="head"><AssignmentTurnedInIcon /> Entry Level {position}</h2> 
                    <h2 className="head"><AssignmentTurnedInIcon /> Mid Level {position}</h2>
                    <h2 className="head">Senior Level {position}</h2>
                </div>
                )}
            </div>
        </div>
    )
}

export default Pathway
