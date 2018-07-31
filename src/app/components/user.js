import React from 'react';
import { Header } from "./header";
import { Home } from "./home";

export class User extends React.Component {

    constructor() {
        super();
        this.state = {
           user :{
               name:"hari",
               age:25,
               hobbies:["playing","coding"]
           }
        }
    }

    onGreet(){
        return {
            "name":"Hareram",
            "email":"hareram41219@gmail.com"
        }
    }

    onchangeage=(num=3)=>{
        console.log('exec');
        this.setState((prevState, props)=>{
            return{
                user: {
                    name: prevState.user.name,
                    age: prevState.user.age + num,
                    hobbies: prevState.user.hobbies
                }
            }
        }, ()=>{
            console.log(this.state.user)
        })

    }


    render() {


        var propData = {
            "name":"Hareram",
            "email":"hareram41219@gmail.com"
        };
        return (
            <div className="container">
                <h4>Hi, welcome</h4>
                <h4>This is User Profile page which is coming from router</h4>
                <h5>Below is the header</h5>
                <Header></Header>
                <h5>Below is the header</h5>
                <Home user={this.state.user} greet={this.onGreet} onchangeage={this.onchangeage}></Home>
            </div>
        );
    }
}