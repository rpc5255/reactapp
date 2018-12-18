import React, { Component } from 'react';
import App from "./App";
import logo from "./logo.svg";


class Sign_up extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            name: null,
            month: null,
            day:null,
            year : null,
            gender: null,
            zipcode: null
        };
        //note maybe use drop-down for age

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        //month 
        this.handleMonthChange=this.handleMonthChange.bind(this);
        //day
        this.handleDayChange=this.handleDayChange.bind(this);
        //yr
        this.handleYearChange=this.handleDayChange.bind(this);
        //note: somewhere later, we have to calculate the user's age and add it to their profile.
        this.handleGenderChange = this.handleGenderChange.bind(this);
        //zip code we need to do some location stuff with it.
        this.handleZipcodeChange = this.handleZipcodeChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
        console.log(this.state.email);
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
        console.log(this.state.password);
    }
    handleFirstNameChange(event) {
        this.setState({ first_name: event.target.value });
        console.log(this.state.first_name);
    }
    handleLastNameChange(event) {
        this.setState({ last_name: event.target.value });
        console.log(this.state.last_name);
    }
    handleMonthChange(event) {
        this.setState({ month: event.target.value });
        console.log(this.state.month);
    }
    handleDayChange(event){
        this.setState({ day: event.target.value });
        console.log(this.state.day);
    }
    handleDayChange(event){
        this.setState({ year: event.target.value });
        console.log(this.state.year);
    }
    handleGenderChange(event) {
        this.setState({ gender: event.target.value });
        console.log(this.state.gender);
    }
    handleZipcodeChange(event) {
        this.setState({ zipcode: event.target.value });
        console.log(this.state.zipcode);
    }
    handleSubmit(event) {
        alert('a sign up was submitted: ' + this.state.email + " with password: " + this.state.password);
        event.preventDefault();
        //have to do if conditions if something is empty
        // have to do condition for invalid age if under 18
        // have to do condition for zipcode
        //password is wrong
        
    }
    render() {
        return (
            <div className="Sign_up">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            First Name:
                    <input type="text" value={this.state.first_name} onChange={this.handleFirstNameChange} /><br />
                            Last Name:
                    <input type="text" value={this.state.last_name} onChange={this.handleLastNameChange} /><br />
                            Month: <select id ="month" value={this.state.month} onChange={this.handleMonthChange}></select>
                            Day: <select id ="day" value={this.state.day} onChange={this.handleDayChange}></select>
                            Year: <select id ="year" value={this.state.year} onChange={this.handleYearChange}></select><br/>

                            Gender:<select id="gender" value={this.state.gender} onChange={this.handleGenderChange}>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select><br/>
                            Zipcode : <input type="text" value={this.state.zipcode} onChange = {this.handleZipcodeChange}/><br/>
                            email:
                    <input type="text" value={this.state.email} onChange={this.handleEmailChange} /><br />
                            password:
                    <input type="password" value2={this.state.password} onChange={this.handlePasswordChange} /><br />

                        </label>
                        <input type="submit" value="Sign up now!" /><br />
                    </form>

                </div>
            </div>
        );
    }
}
export default Sign_up;