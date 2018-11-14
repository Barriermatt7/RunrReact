import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Sign from "./pages/Signup";
import Navbar from "./components/Navbar";
<<<<<<< HEAD

import Wrapper from "./components/Wrapper";

=======
import Datapage from "./pages/Datapage"

import Wrapper from "./components/Wrapper";


>>>>>>> 70650659bf9192c840303d98246af34b977036f1
const App = () => (
  <Router> 
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Sign} />
<<<<<<< HEAD
=======
        <Route exact path="/datapage" component={Datapage} />
>>>>>>> 70650659bf9192c840303d98246af34b977036f1
      </Wrapper>
      
    </div>
  </Router>
);

export default App;
