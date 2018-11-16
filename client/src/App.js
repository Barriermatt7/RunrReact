// // @flow
// import React, {Component, createRef} from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Signup from "./components/Signup.js";
// import Wrapper from "./components/Wrapper";
// import Home from "./pages/Home.js";
// import Login from "./pages/Login";
// import Navbar from "./components/Navbar";
// import './App.css';
// import "leaflet/dist/leaflet.css";
// //import '../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css';
// import L from 'leaflet';

// import Weather from "./components/Weather/Weather";
// import Form from "./components/Weather/Form";

// const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";





// class App extends Component {
  
//   state = {
  
//     temperature: undefined,
//     city: undefined,
//     country: undefined,
//     humidity: undefined,
//     description: undefined,
//     error: undefined
//   }
//   getWeather = async (e) => {

//     const city = e.target.elements.city.value;
//     const country = e.target.elements.country.value;
//     e.preventDefault();   
//     const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
//     const response = await api_call.json();
//     console.log(response);
//     if(city && country){
//       this.setState({
//         temperature: response.main.temp,
//         city: response.name,
//         country: response.sys.country,
//         humidity: response.main.humidity,
//         description: response.weather[0].description,
//         error: ""
//       })
//     }else{
//       this.setState({
//         error: "Please input search values..."
//       })
//     }
//   }
//   render() {
  

//     return (
//       <React.Fragment>
      
//       <Router>
//       <div>
//       <Navbar />
   
      
        
//         <Route exact path="/login" component={Login} />
//           <Route exact path="/signup" component={Signup}/>
//           <Route exact path="/home" component={Home} />
//           <Route path="/map" component={MapComponent} />
           
        
        
//       </div>
//       </Router>
//       <div>
//       <Form loadWeather={this.getWeather} />
//       <Weather
//         temperature={this.state.temperature}
//         city={this.state.city}
//         country={this.state.country}
//         humidity={this.state.humidity}
//         description={this.state.description}
//         error={this.state.error}
//       />
//       </div>
//     </React.Fragment>
      
//     )
//   }
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Sign from "./pages/Signup";
import Navbar from "./components/Navbar";
import MapComponent from './components/Map/Map';
import Wrapper from "./components/Wrapper";
import '../src/App.css'

const App = () => (
  <Router> 
  <div>
  <Navbar />
  <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Sign} />
        <Route exact path="/map" component={MapComponent} />
        
        </Wrapper>
      
    </div>
  </Router>
);

export default App;
