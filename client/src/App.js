// @flow
import React, {Component, createRef} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/Signup.js";
import Wrapper from "./components/Wrapper";
import Home from "./Pages/Home.js";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import './App.css';
import "leaflet/dist/leaflet.css";
//import '../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import MapComponent from './components/Map/Map';


class App extends Component {
  
  
  render() {
  

    return (
      <React.Fragment>
      
      <Router>
      <div>
      <Navbar />
   
        
        
        <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/home" component={Home} />
          <Route path="/map" component={MapComponent} />
           
        
        
      </div>
    </Router>
    </React.Fragment>
      
    )
  }
}

export default App;
