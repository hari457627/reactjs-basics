import React, { Component } from 'react';
import { render } from "react-dom";

import { User } from './components/user';
import { Register } from './components/register';
import { Login } from './components/login';
import { Success } from './components/success';
import { Table } from './components/table';
import { Mytable } from './components/myTable';
import { Time } from './components/time';
import { Dashboard } from './components/dashboard';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { Redux } from './components/redux';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: false
        }
    }
    modifyLoginFlag = (flag=true)=>{
        this.setState({isLogin: flag});
    }
    componentWillMount(){
       if(localStorage.getItem('data')){
        let name = localStorage.getItem('data').name;
        this.setState({isLogin:true});
       }
    }

    handleSubmit = () => {
        this.setState({ isLogin: false });  
        localStorage.clear();
        console.log('logged out');
    }

    render() { 
        return (
            <Router>
                <div className="container-fluid">
                    <h2>click on the below links</h2>
                    <div className="navbar navbar-default">
                        <div className="navbar navbar-header">
                            <ul className="nav navbar-nav">
                                <li><Link to={'/user'} >User</Link></li>
                                <li>{this.state.isLogin?<Link to={'/logout'} onClick={this.handleSubmit}>Logout</Link>:<Link to={'/login'} activeStyle={{color:"red"}}>Login</Link>}</li>
                                <li><Link to={'/Mytable'} >Users</Link></li>
                                <li><Link to={'/Time'} >Time</Link></li>
                                <li>{this.state.isLogin?"":<Link to={'/Register'}>Register</Link>}</li>
                                <li><Link to={'/Redux'}>Redux</Link></li>
                            </ul>
                        </div>
                    </div>  
                    <Route path={"/user"} component={User}></Route>
                    <Route path={"/success"} component={Success}></Route>
                    <Route path={"/register"} component={Register}></Route>
                    <Route path={"/login"} render={(props) => <Login modifyLoginFlag={this.modifyLoginFlag} {...props} /> }></Route>
                    <Route path={"/logout"} render={(props) => <Login modifyLoginFlag={this.modifyLoginFlag} {...props} /> }></Route>
                    <Route path={"/table"} component={Table}></Route>
                    <Route path={"/Mytable"} component={Mytable}></Route>
                    <Route path={"/Time"} component={Time}></Route>
                    <Route path={"/Redux"} component={Redux}></Route>
                    <Route path={"/Dashboard"} render={(props) => <Dashboard modifyLoginFlag={this.modifyLoginFlag} {...props} /> }></Route>
                    {this.state.isLogin ? <Redirect   to="Dashboard" />:''}
                </div>
            </Router>   
        );
    }
}

render(<App />, window.document.getElementById('app'));