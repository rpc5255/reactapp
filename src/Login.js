import React, {Component} from 'react';
import App from "./App";
import './Login.css';
import logo from "./logo.svg";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});

    }

    handleSubmit(event) {
        alert('An email was submitted: ' + this.state.email + " with password: " + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <div className="container">
                    <h4>Sign In</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div className="email">
                            <label>Email</label>
                            <input type="text" value={this.state.email} onChange={this.handleEmailChange}/><br/>
                        </div>
                        <div className="password">
                            <label>Password</label>
                            <input type="password" value2={this.state.password}
                                   onChange={this.handlePasswordChange}/><br/>
                        </div>
                        <input type="submit" value="Sign In"/><br/>
                        <div className="signup">
                            <text>
                                Don't have an account? <a href="">Sign up now</a>
                            </text>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default Login;

