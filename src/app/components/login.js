import React from 'react';

import { browserHistory } from 'react-router';

import { Success } from './success';
import { Dashboard } from './dashboard';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            errorMsg: "",
            userData: {}
        }
    }
    handleChange(event) {
        this.setState({ errorMsg: "" });
    }

    styles = {
        sampleClass: {
            color: "red"
        }
    }

    handleSubmit = () => {

        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;

        var data = {};
        data.email = email;
        data.phone = phone;
        console.log(data);

        fetch("http://10.9.9.108:2001/login", {
            method: "POST",
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(response => {

                this.setState({ userData: response });
                if (response === null) {

                    this.setState({ errorMsg: 'Enter valid credentials' });
                    this.props.history.push({
                        pathname: '/Login'
                      })
                }
                else if (response.id) {
                    localStorage.setItem("data",JSON.stringify(response));
                    console.log(localStorage);
                    this.props.history.push({
                        pathname: '/Dashboard',
                        state: { userData: response }
                    })
                }
            })
    }

    register = () => {
        this.props.history.push('/Register');
    }

    render() {
        
        return (
            <div className="container">
                <h4>Hi</h4>
                <h4>Login to your account</h4>
                <input id="email" type="email" className="form-control" required="true" onChange={this.handleChange} /><br />
                <input id="phone" type="text" className="form-control" required="true" onChange={this.handleChange} /><br />
                <span style={this.styles.sampleClass}>{this.state.errorMsg}</span><br />
                <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                
                <br />
                New user
                <br />
                <button className="btn btn-success" onClick={this.register}>SignUp</button>
            </div>
        );
    }
}