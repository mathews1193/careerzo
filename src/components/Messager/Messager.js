import React,{ useState, useEffect} from 'react';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import firebase from '../../Firebase/firebase1';
import './Messager.css';
import Messages from './Messages';

function Messager(userId) {
    const [message, setMessage] = useState("");
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("");
    const [profile, setProile]= useState([]);


    const ref = firebase.firestore().collection('employee').where("userId","==", userId);

    const getProfile = () => {
        ref.onSnapshot((querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push(doc.data());
          });
          setProile(list);
        });
      };

    const createMsg = () => {
        <>
            {profile.map((p) => (
                setFrom(p.name)
            ))};
        </>

        firebase
        .firestore()
        .collection("messages")
        .add({
        msg: message,
        to: to,
        from:from,
        })
        .then(ref => {
        console.log("Added document with ID: ", ref.id)
        })
    };

    useEffect(() => {
        getProfile();
         // eslint-disable-next-line
       }, []);

    return (
        <div>
            <div className="background6">
                <h1 className="title">Message Board</h1>
                <div className="form1">
                     <Messages />
                </div>

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
                <div className="btn-container">
                    <button onClick={createMsg} className="btn-msg" type="submit" >Send <LabelImportantIcon  /></button>
                </div> 
            </div> 
        </div>
    )
}

export default Messager
