import React, {Component} from 'react'; 
import API from '../api/users.js';

export default class Home extends Component{

    state = {
        username:"",
        password:""
    }
    render(){
        return(
           <h1>HOME</h1>
        )
    }
}
