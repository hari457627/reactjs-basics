import React from 'react';
import { browserHistory } from 'react-router';

export class Mytable extends React.Component {
    constructor() {
        super();
        this.state = {
            user:[]
        }
    }
    componentDidMount(){
        this.getData();
    }
    getData = () => {
		fetch("http://10.9.9.108:2001/data")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            user : result
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            console.log(error);
        })
      }

    render() {
        return (
            
            <div className="container">
                <h4>Hi</h4>
                <h4>Below are the List of Users</h4>
                <ul>
                    {this.state.user.map(user => (
                    <li >
                    {user.name}
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
}