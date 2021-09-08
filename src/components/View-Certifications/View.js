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
              <h1 className= "title">Current Certifications for Employee</h1>
                {document.map((d) => (
                    <div className="doc"> 
                        <h1 className="doc-title">{d.certification}</h1>
                        <img className="doc-pic" src={d.file || "http://via.placeholder.com/300"} alt="doc" />
                        <h3>Issuer: {d.issuer}</h3>
                        <div className="doc-link">
                          <h3>Link: </h3> <p>{d.file}</p>
                        </div>
                    </div>
            ))};
            </div>
            
        </div>
    )
}

export default View
