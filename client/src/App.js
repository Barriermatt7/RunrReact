
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
//import About from "./pages/About";
import Navbar from "./components/Navbar";

import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Wrapper>
      
    </div>
  </Router>
);

import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './component/Login.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Login/>
      </div>
    );
  }
}


export default App;
