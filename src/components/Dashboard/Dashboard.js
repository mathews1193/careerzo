import React from 'react';
import './Dashboard.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ChatIcon from '@material-ui/icons/Chat';
import TransformIcon from '@material-ui/icons/Transform';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import ListAltIcon from '@material-ui/icons/ListAlt';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

function Dashboard() {
    var user ="Steve Rogers";
    const percentage = 50;
    return (
        <div>
            <div className="background1">
                <h1 className="header">Welcome, {user}</h1>
                <div className="progress">
                    <CircularProgressbar 
                    value={percentage} 
                    text={`${percentage}%`} 
                    styles={buildStyles({
                        pathColor: `rgba(224, 224, 78, 0.9, ${percentage / 100})`,
                        textColor: '#eafa04e3',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                      })}/>
                </div>

                <div className="options">
                    <div className="set1">
                        <Link to="/certification"><button className="btn-dash"><ListAltIcon style={{fontSize: 50}} /> Certifications
                        </button> </Link>
                        <Link to="/career-pathway"><button className="btn-dash"><TransformIcon style={{fontSize: 50}}/>Career Pathway
                        </button> </Link>
                    </div>
                    <div className="set1">
                        <Link to="/positions"><button className="btn-dash"><TransferWithinAStationIcon style={{fontSize: 50}} />Past Positions
                        </button> </Link>
                        <Link to="/messager"><button className="btn-dash"><ChatIcon style={{fontSize: 50}} /> Messager
                        </button> </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard
