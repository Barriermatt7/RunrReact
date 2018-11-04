
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
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
