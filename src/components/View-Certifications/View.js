import React, {useState, useEffect} from 'react';
import DocViewer from "react-doc-viewer";
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
                        <DocViewer documents={document} />
                    </div>
            ))};
            </div>
            
        </div>
    )
}

export default View
