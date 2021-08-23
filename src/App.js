import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './containers/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Pathway from './containers/Pathway';
import Profile from './containers/Profile';
import Dashboard from './containers/Dashboard';
import Messager from './containers/Messager';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='container'>
          <Route exact path="/" component={Home}/>
          <Route path="/signup"component={SignUp} />
          <Route path="/login"component={Login} />
          <Route path="/career-pathway"component={Pathway} />
          <Route path="/profile"component={Profile} />
          <Route path="/dashboard"component={Dashboard} />
          <Route path="/messager"component={Messager} />
        </div>
      </Router>
    </div>
  );
}
export default App;