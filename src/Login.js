import React, { Component } from 'react';
import App from "./App";
import './Login.css';
import logo from "./logo.svg";



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null ,
            password: null };
    
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sign_up = this.sign_up.bind(this);
        
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
        console.log(this.state.email);
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
        console.log(this.state.password);

    }
    handleSubmit(event) {
        alert('An email was submitted: ' + this.state.email + " with password: " + this.state.password);
        event.preventDefault();
    }
    sign_up(event){
        console.log("you clicked me");
    }

    render() {
        return (
            <div className="Login">
                <div className="container">
                    <h4>Sign In</h4>


            <form onSubmit={this.handleSubmit}>
                <label>
                    email:
                    <input type="text" value={this.state.email} onChange={this.handleEmailChange} /><br />
                    password:
                    <input type="password" value2={this.state.password} onChange={this.handlePasswordChange} /><br />
                </label>
                <input type="submit" value="Login!" /><br />

                <text>
                    Don't have an account?{"\n"}
                    Sign up for one instantly!
                </text>
                <input type="submit" value="Sign-up!" onClick={this.sign_up}></input>/>
            </form>
                </div>
            </div>
        );
    }
}


export default Login;

