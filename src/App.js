import React,{ useState, useEffect } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import firebase from './Firebase/firebase1';
import Home from './containers/Home';
import Login from './containers/Login';
import Pathway from './containers/Pathway';
import Profile from './containers/Profile';
import Dashboard from './containers/Dashboard';
import Messager from './containers/Messager';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Certification from './containers/Certification';
import View from './containers/View';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './App.css';
import Voice from './containers/Voice';

toast.configure();

function App() {
  const [user, setUser] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [auth, setAuth] = useState(false);

  // clears user input for email and password 
const clearInputs = () =>{
  setEmail('');
  setPassword('');
}

//clears error message from screen
const clearErrors = () => {
  setEmailError('');
  setPasswordError('');
}

// login user with email and password
const handleLogin = () =>{ 
  clearErrors();
  firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err) =>{
      // eslint-disable-next-line default-case
      switch(err.code){
        case "auth/invalid-email":
          case "auth/user-disabled":
            case "user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
    }
  });
  toast.success("Login Successful!", {
    theme:"colored"
  });
};

// signup user with email and password
const handleSignup = () =>{
  clearErrors();
  firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((err) =>{
      // eslint-disable-next-line default-case
      switch(err.code){
        case "auth/email-already-in-use":
          case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
    }
   
  }); 
  toast.success("Account Created Successfully!", {
      theme:"colored"
    });
};

//logout user 
const handleLogout = () =>{
  firebase.auth().signOut(); 
  toast.success("Logging Out......",{
    theme:"colored"
  });
};

// check to see if user is logged in 
const authListener = () =>{
  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      clearInputs();
      setUserId(firebase.auth().currentUser.uid);
      setUser(user);
    }else {
      setUser('');
    }
  });
};

useEffect(() =>{
  authListener();
}, []);

  return (
    <div className="App">
      <Router> 
        <Navbar user={user} handleLogout={handleLogout} />
        {user ? (
          <div>
          <div className='container'>
            <Route exact path="/" component={Home} />
            <Route path="/messager"component={Messager} />
            <Route path="/voice-assistant" component={Voice} />
            <Route path="/view-certification"component={View} />

            <Route path="/certification">
              <Certification userId={userId} /> 
            </Route>

            <Route path="/profile">
              <Profile userId={userId} /> 
            </Route>
            
            <Route path="/career-pathway">
                <Pathway userId={userId} />
            </Route>

            <Route path="/dashboard"> 
              <Dashboard userId={userId} />
            </Route>
        </div>
      </div>
        ) : (
          <div className='container'>
              <Login 
              email={email} 
              setEmail={setEmail} 
              password={password} 
              setPassword={setPassword} 
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError} 
              />
          </div>
        )}
        <Footer />
      </Router>
    </div>
  );
}
export default App;