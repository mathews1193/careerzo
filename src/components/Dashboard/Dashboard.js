import React, {useState, useEffect} from 'react';
import './Dashboard.css';
import firebase from '../../Firebase/firebase1';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ChatIcon from '@material-ui/icons/Chat';
import TransformIcon from '@material-ui/icons/Transform';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import ListAltIcon from '@material-ui/icons/ListAlt';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

function Dashboard(userId) {
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
            <div className="background1">
                <h1 className="header">Welcome, {e.name}</h1>
                <div className="progress">
                    <CircularProgressbar 
                    value={e.percentage} 
                    text={`${e.percentage}%`} 
                    styles={buildStyles({
                        pathColor: `rgba(244, 252, 0, ${e.percentage / 100})`,
                        textColor: '#eafa04e3',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                      })}/>
                </div>
               

                <div className="options">
                    <div className="set1">
                        <Link to="/certification"><button className="btn-dash"> <TransformIcon style={{fontSize: 50}}/> Add Certification
                        </button> </Link>
                        <Link to="/career-pathway"><button className="btn-dash"><TransferWithinAStationIcon style={{fontSize: 50}} /> Career Pathway
                        </button> </Link>
                    </div>
                    <div className="set1">
                        <Link to="/view-certification"><button className="btn-dash"><ListAltIcon style={{fontSize: 50}} /> View Certifications
                        </button> </Link>
                        <Link to="/messager"><button className="btn-dash"><ChatIcon style={{fontSize: 50}} /> Messager
                        </button> </Link>
                    </div>
                </div>
                
            </div> 
            ))};
        </div>
    )
}

export default Dashboard
