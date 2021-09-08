import React, { useState, useEffect } from 'react'
import firebase from '../../Firebase/firebase1';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Voice.css'

toast.configure();

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function Voice(userId) {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])
  const [result, setResult] = useState()

  const [employee, setEmployee]= useState([]);

  const ref = firebase.firestore().collection('employee').where("userId","==", userId);

  useEffect(() => {
    handleListen();
    getEmployee();
  }, [isListening])

  const getEmployee = () => {
    ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setEmployee(list);
    });
  };

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript);
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
      checkTranscript (transcript);
    }
  }

  const checkTranscript = e => {
    if ( e ==="check position") {
      checkPosition();
    } else if (e === "check progress") {
      checkProgress();
    } else if (e === "find department") {
      findDepartment();
    } else if (e === "check for next promotion"){
      checkPromotion();
    }
  }
  const checkPosition = () => {
    { employee.map((v) => (
        setResult(v.position)
    ))};

    toast.success("Found Position for Selected Employee! ", {
      theme:"colored"
    });
  };

  const checkProgress = () => {
    { employee.map((v) => (     
      setResult(v.percentage)
      ))};

      toast.success("Found Progress Status for Selected Employee!", {
        theme:"colored"
    });
  };

  const findDepartment = () => {
    { employee.map((v) => (
      setResult(v.department)
  ))};

  toast.success("Found Department for Selected Employee! ", {
    theme:"colored"
  });
  }

  const checkPromotion = () => {
    checkPosition();

    if (result === "Entry") {
      setResult("The Next Promotion is Mid-Level")
    } else if (result === "Mid") {
      setResult("The Next Promotion is Senior-Level")
    } else {
      setResult("Currently Senior-Level Which is The Highest Level")
    }

  toast.success("Found Promotion for Selected Employee! ", {
    theme:"colored"
    });
  }

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note])
    setNote('')
  }

  return (
    <>
     
      <div className="background8"> 
      <h1 className="title">Voice Assistant</h1>
        <div className="form">
         
          <div className="mic">
            {isListening ? <span className="logo">🎙️🛑</span> : <span className="logo">🎙️</span>}
          </div>
          <div className="btn-mic"> 
            <div className="note">
              <p>{note}</p>
            </div>
            <button className="btn-voice" onClick={handleSaveNote} disabled={!note}>
              Confirm Input
            </button> 
            <button className="btn-voice" onClick={() => setIsListening(prevState => !prevState)}>
              Start/Stop
            </button>
          </div>
        </div>
        <div className="msg">
          <h2>Results</h2>
          {savedNotes.map(n => (
            <div>
            <p key={n}>{n}</p>
            <p>{result}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Voice