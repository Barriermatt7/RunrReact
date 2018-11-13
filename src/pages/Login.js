import React, { Component } from 'react';

import './login.css';

class App extends Component {
  render() {
    return (

      

      <div className="App">
        
      
      <div className="App__Form">
      

      

      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
          




        <div className="FormField">
          <label className="FormField__Label" htmlFor="">Username</label>
          <input type="text" id="username" className="FormField__Input" placeholder="Enter your username" name="username"/>
          </div>



          <div className="FormField">
          <label className="FormField__Label" htmlFor="name">Password</label>
          <input type="text" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
          </div>

            <div className="FormField">
            <button className="FormField__Button mr-20">Log In</button> 
          
          </div>
        </form>
      
      </div>
      
      
        
      
      
      </div>
      </div>
    
      
      );
  }
}
export default App;