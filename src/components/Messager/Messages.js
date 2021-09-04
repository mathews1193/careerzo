import React, { useState , useEffect} from 'react';
import firebase from '../../Firebase/firebase1';

function Messages() 
{
    const [messageList, setMessageList] = useState([]);
  
    const ref = firebase.firestore().collection('messages');

    const getMessages = () => {
        ref.onSnapshot((querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push(doc.data());
          });
          setMessageList(list);
        });
      };

      useEffect(() => {
        getMessages();
        // eslint-disable-next-line
      }, []);

    return (
        <div>
            {messageList.map((m) => (
                <div className="msg1"> 
                    <p className="From">From: {m.from} To: {m.to} </p> 
                    <p>{m.msg}</p>
                </div> 
            ))}  
        </div>
    )
}

export default Messages
