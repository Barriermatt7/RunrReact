import React, {Component} from 'react'; 
import API from '../api/users.js';

export default class Signup extends Component{

    state = {
        username:"",
        password:""
    }
    handleSignUp = (event) => {
        event.preventDefault();
        console.log("I'm registering up baby", this.state);
        API.register(this.state).then(function(response){
            console.log(response);
        })
    }
    captureInput = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render(){
        return(
            <div>
            <h3>Sign up</h3>
            <form>
                <input onChange={this.captureInput} name="username"/>
                <input onChange={this.captureInput} name="password"/>
                <button onClick={this.handleSignUp}>Submit</button>
            </form>
            </div>
        )
    }
}
