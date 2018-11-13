import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Sign from "./pages/Signup";
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
        <Route exact path="/signup" component={Sign} />
      </Wrapper>
      
    </div>
  </Router>
);

export default App;
