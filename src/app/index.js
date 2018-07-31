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


class App extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <h2>click on the below links</h2>
                    <div className="navbar navbar-default">
                        <div className="navbar navbar-header">
                            <ul className="nav navbar-nav">
                                <li><Link to={'/user'} activeStyle={{color:"red"}}>User</Link></li>
                                <li><Link to={'/Register'} activeStyle={{color:"red"}}>Register</Link></li>
                                <li><Link to={'/Login'} activeStyle={{color:"red"}}>Login</Link></li>
                                <li><Link to={'/Mytable'} activeStyle={{color:"red"}}>Users</Link></li>
                                <li><Link to={'/Time'} activeStyle={{color:"red"}}>Time</Link></li>
                                
                            </ul>
                        </div>
                    </div>  
                    <Route path={"/user"} component={User}></Route>
                    <Route path={"/success"} component={Success}></Route>
                    <Route path={"/register"} component={Register}></Route>
                    <Route path={"/login"} component={Login}></Route>
                    <Route path={"/table"} component={Table}></Route>
                    <Route path={"/Mytable"} component={Mytable}></Route>
                    <Route path={"/Time"} component={Time}></Route>
                    <Route path={"/Dashboard"} component={Dashboard}></Route>
                    
                </div>
            </Router>   
        );
    }
}

render(<App />, window.document.getElementById('app'));