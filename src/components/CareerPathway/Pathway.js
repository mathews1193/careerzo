import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import './Pathway.css';

function Pathway() {
    var position = "Foreman";
    var level = "Senior";
    var name = "Steve Rogers";
    const img = [
        'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ]; 

    return (
        <div>
            <h1 className="head">Career Pathway: {name}</h1>
            <img src={img[0]} alt="Logo" width="25%" height="25%"/>
            <div className="path-infor">
                <h2 className="head">Current Level: {level} Level {position}</h2>
                <h2 className="head">Promotion Requirements: Not Meet</h2>
            </div>

            <ProgressBar 
            completed={60}
            bgColor={'#eafa04e3'}
            labelColor={'black'}
            width={'60%'}
            margin={'0 auto'}
             />

             { level === "Entry" ? (
             <div>
                <h2 className="title">Entry Level {position}</h2> 
                <h2 className="title">Mid Level {position}</h2>
                <h2 className="title">Next Level Promotion</h2>
                <h2 className="title">Senior Level {position}</h2>
                <h2 className="title">Reach Mid Level Position First!</h2> 
            </div>
            ) : ( level === "Mid") ? (
            <div>
                <h2 className="title"> <AssignmentTurnedInIcon /> Entry Level {position}</h2> 
                <h2 className="title">Mid Level {position}</h2>
                <h2 className="title">Senior Level {position}</h2>
                <h2 className="title">Next Level Promotion!</h2>
            </div>
            ) : (
                <div>
                <h2 className="title"><AssignmentTurnedInIcon /> Entry Level {position}</h2> 
                <h2 className="title"><AssignmentTurnedInIcon /> Mid Level {position}</h2>
                <h2 className="title">Senior Level {position}</h2>
            </div>
            )}
        </div>
    )
}

export default Pathway
