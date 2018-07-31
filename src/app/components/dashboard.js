import React from 'react';

import Login from './login';

export class Dashboard extends React.Component {
    constructor() {
        super();
        
        this.state = {
            isLogin: true
        }
    }
    componentWillMount(){
        console.log(localStorage.getItem("data"));
    }
    handleSubmit = () => {
        this.setState({ isLogin: false });  
        this.props.history.push({
            pathname: '/Login'
        }) 
    }
    
    componentWillUnmount(){
    localStorage.clear();
        console.log('logged out');
    }   

    render() {
        console.log(this.props);
        
        return (
            <div className="container">
                {
                    function(){
                        if(this.props.location.state){
                            return <h4>Hi, welcome {this.props.location.state.userData.name.toUpperCase()}</h4>;
                        }
                        else{
                            return <h4>Welcome</h4>;
                        }
                    }.bind(this)()
                }
                <h4>This is your Dashboard</h4>
                <br/>
                <br/>
                <br/>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Logout</button>
            </div>      
        );
    }
}