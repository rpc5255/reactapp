import React, { Component } from 'react';
import App from "./App";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.state = { pw_value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleChange_pw = this.handleChange_pw.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleChange_pw(event) {
        this.setState({ value2: event.target.pw_value });
        //value 2 is for password!!!
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value + this.state.value2);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    email:
              <input type="text" value={this.state.value} onChange={this.handleChange} /><br />
                    password:
              <input type="password" value2={this.state.pw_value} onChange={this.handleChange_pw} /><br />
                </label>
                <input type="submit" value="Login!" /><br />

                <text>
                    Don't have an account?{"\n"}
                    Sign up for one instantly!
                </text>
                <input type="submit" value="Sign-up!"/> 

            </form>
        );
    }
}

export default Login;
