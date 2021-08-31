import React,{ useState, useEffect } from 'react';
import {useHistory, BrowserRouter as Router,Route} from "react-router-dom";
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
import Positions from './containers/Positions';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './App.css';

toast.configure();

function App() {
  const [user, setUser] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

const history = useHistory();

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
    history.push('/dashbaord');
    toast.success("Login Successful!", {
      theme:"colored"
    });
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
    toast.success("Account Created Successfully!", {
      theme:"colored"
    });
  });
};

//logout user 
const handleLogout = () =>{
  toast.infor("Logging Out......",{
    theme:"colored"
  });
  firebase.auth().signOut();
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
        <Navbar handleLogout={handleLogout}/>
        <div className='container'>

          <Route exact path="/">
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
          </Route>

          <Route path="/certification">
            <Certification userId={userId} /> 
          </Route>

          <Route path="/profile">
            <Profile userId={userId} /> 
          </Route>

          <Route path="/home" component={Home} />
          <Route path="/career-pathway"component={Pathway} />
          <Route path="/dashboard"component={Dashboard} />
          <Route path="/messager"component={Messager} />
         
          <Route path="/past-position"component={Positions} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;