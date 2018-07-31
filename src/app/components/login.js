import React from 'react';
import ReactDOM from 'react-dom';

import { browserHistory } from 'react-router';

import { Success } from './success';
import { Dashboard } from './dashboard';

import { GoogleLogin } from 'react-google-login';

import  FacebookLogin  from 'react-facebook-login';

console.log("Facebook object:",FacebookLogin)

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

    responseGoogleSuccess = (response) => {
        console.log(response.w3.ig);  
        console.log('success'); 
        localStorage.setItem("data",JSON.stringify(response));
        console.log(localStorage);
        this.props.history.push({
            pathname: '/Dashboard',
            state: { userData: {name : response.w3.ig} }
        })
    }

    responseGoogleFail = (response) => {
        console.log('Sign-in Failed');
        console.log(response);
    }
    
    responseFacebook = (response) => {
        console.log(response);
        localStorage.setItem("data",JSON.stringify(response));
        console.log(localStorage);
        this.props.history.push({
            pathname: '/Dashboard',
            state: { userData: {name : response.name} }
        })
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
                <br />
                New user
                <br />
                <br />
                <button className="btn btn-success" onClick={this.register}>SignUp</button>
                <br/>
                <br/>
                <p>or login with Google</p>
                <GoogleLogin
                clientId="523447215619-or721glqdkcuhtu3lh4qnqvdrmgampo3.apps.googleusercontent.com"
                clientSecret="i4kf7-EjFylPBF6OcmA9N-Yw"                
                buttonText="Login"
                onSuccess={this.responseGoogleSuccess}
                onFailure={this.responseGoogleFail}
                className="btn btn-md btn-danger"
                />
                <br/><br/>
                <FacebookLogin
                appId="294238751125031"
                autoLoad={true}
                fields="name,email,picture"
                callback={this.responseFacebook} 
                className="btn btn-md " />
            </div>
        );
    }
}