import React, {Component} from 'react'; 
import API from '../api/users.js';
import { withRouter } from "react-router-dom";
class Login extends Component{

    state = {
        username:"",
        password:""
    }
    handleSignUp = (event) => {
        event.preventDefault();
        console.log("I'm signing up baby", this.state);
        API.login(this.state).then(function(response){
            console.log(response);
            // if (response.status == 200) {
            //     this.history.push("/home");
            // }
        
        });
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


export default withRouter(Login);