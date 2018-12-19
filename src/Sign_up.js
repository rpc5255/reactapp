import React, { Component } from 'react';
import App from "./App";
import logo from "./logo.svg";
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';

//credits :  https://www.npmjs.com/package/react-dropdown-date  - used this for select population


class Sign_up extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            name: null,
            month: null,
            day: null,
            year: null,
            gender: null,
            zipcode: null

        };
        //note maybe use drop-down for age

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        //month 
        this.handleMonthChange = this.handleMonthChange.bind(this);
        //day
        this.handleDayChange = this.handleDayChange.bind(this);
        //yr
        this.handleYearChange = this.handleDayChange.bind(this);
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
    handleDayChange(event) {
        this.setState({ day: event.target.value });
        console.log(this.state.day);
    }
    handleDayChange(event) {
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
                            Month: <MonthPicker
                                defaultValue={'select month'}
                                // to get months as numbers
                                numeric
                                // default is full name
                                short
                                // default is Titlecase
                                caps
                                // mandatory if end={} is given in YearPicker
                                endYearGiven
                                // mandatory
                                year={this.state.year}
                                // default is false
                                required={true}
                                // default is false
                                disabled={false}
                                // mandatory
                                value={this.state.month}
                                // mandatory
                                onChange={(month) => {
                                    this.setState({ month });
                                    console.log(month);
                                }}
                                id={'month'}
                                name={'month'}
                                classes={'classes'}
                                optionClasses={'option classes'}
                            />
                            {/* <select id="month" value={this.state.month} onChange={this.handleMonthChange}></select> */}
                            Day:
                            <DayPicker
                                defaultValue={'select day'}
                                // mandatory
                                year={this.state.year}
                                // mandatory
                                month={this.state.month}
                                // mandatory if end={} is given in YearPicker
                                endYearGiven
                                // default is false
                                required={true}
                                // default is false
                                disabled={false}
                                // mandatory
                                value={this.state.day}
                                // mandatory
                                onChange={(day) => {
                                    this.setState({ day });
                                    console.log(day);
                                }}
                                id={'day'}
                                name={'day'}
                                classes={'classes'}
                                optionClasses={'option classes'}
                            /><br/>
                            {/* <select id="day" value={this.state.day} onChange={this.handleDayChange}></select> */}
                            Year:<YearPicker
                                defaultValue={'select year'}
                                // default is 1900
                                start={1910}
                                // default is current year
                                end={2000}
                                // default is ASCENDING
                                reverse
                                // default is false
                                required={true}
                                // default is false
                                disabled={false}
                                // mandatory
                                value={this.state.year}
                                // mandatory
                                onChange={(year) => {
                                    this.setState({ year });
                                    console.log(year);
                                }} id={'year'}
                                name={'year'}
                                classes={'classes'}
                                optionClasses={'option classes'}
                            /><br/>

                            Gender:<select id="gender" value={this.state.gender} onChange={this.handleGenderChange}>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select><br />
                            Zipcode : <input type="text" value={this.state.zipcode} onChange={this.handleZipcodeChange} /><br />
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