import React, {useState, useEffect} from 'react';
import './View.css';
import firebase from '../../Firebase/firebase1';

function View(userId) {

    const [document, setDocument]= useState([]);

    const ref = firebase.firestore().collection('Certifications').where("userId","==", userId);


    const getDocument = () => {
        ref.onSnapshot((querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push(doc.data());
          });
          setDocument(list);
        });
      };

      useEffect(() => {
        getDocument();
         // eslint-disable-next-line
       }, []);
    return (
        <div>
            <div className="background9">
                {document.map((d) => (
                    <div> 
                        <h1>{d.label}</h1>
                        <h1>{d.issuer}</h1>
                    </div>
            ))};
            </div>
            
        </div>
    )
}

export default View
