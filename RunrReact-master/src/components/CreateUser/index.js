import React, {Component} from 'react'; 
import API from '../api/users.js';

export default class Login extends Component{

    state = {
        username:"",
        password:""
    }
    handleSignUp = (event) => {
        event.preventDefault();
        console.log("I'm signing up baby", this.state);
        console.log("I am hererere")
        console.log(API)
        // API.register(this.state).then(function(response){
        //     console.log(response);
        // })
    }
    captureInput = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render(){
        return(
            <form>
                <input onChange={this.captureInput} name="username"/>
                <input onChange={this.captureInput} name="password"/>
                <button onClick={this.handleSignUp}>Submit</button>
            </form>
        )
    }
}