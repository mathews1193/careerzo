import React, { useState, useEffect } from 'react'
import './Voice.css'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function Voice() {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])

  useEffect(() => {
    handleListen()
  }, [isListening])

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
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note])
    setNote('')
  }

  return (
    <>
     
      <div className="background8"> 
      <h1>Voice Assistant</h1>
        <div className="form">
         
          <div className="mic">
            {isListening ? <span className="logo">🎙️🛑</span> : <span className="logo">🎙️</span>}
          </div>
          <div className="btn-mic"> 
            <div className="note">
              <p>{note}</p>
            </div>
            <button className="btn-voice" onClick={handleSaveNote} disabled={!note}>
              Save Note
            </button> 
            <button className="btn-voice" onClick={() => setIsListening(prevState => !prevState)}>
              Start/Stop
            </button>
          </div>
        </div>
        <div className="msg">
          <h2>Commands</h2>
          {savedNotes.map(n => (
            <p key={n}>{n}</p>
          ))}
        </div>
      </div>
    </>
  )
}

export default Voice