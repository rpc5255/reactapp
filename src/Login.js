import React, { Component } from 'react';
import App from "./App";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form className="Login" onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    Password:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Login" />
                <input type="submit" value="Sign up Free"/>
            </form>
        );
    }
}
export default Login;
