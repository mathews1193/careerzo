import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './containers/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Pathway from './containers/Pathway';
import Profile from './containers/Profile';
import Dashboard from './containers/Dashboard';
import Messager from './containers/Messager';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Certification from './containers/Certification';
import Positions from './containers/Positions';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='container'>
          <Route exact path="/" component={Home}/>
          <Route path="/signup"component={SignUp} />
          <Route path="/login"component={Login} />
          <Route path="/career-pathway"component={Pathway} />
          <Route path="/profile"component={Profile} />
          <Route path="/dashboard"component={Dashboard} />
          <Route path="/messager"component={Messager} />
          <Route path="/certification"component={Certification} />
          <Route path="/past-position"component={Positions} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;