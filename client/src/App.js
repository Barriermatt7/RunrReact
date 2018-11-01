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

export default App;
