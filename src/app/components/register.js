import React from 'react';
import { browserHistory } from 'react-router';

import { Success } from './success';

export class Register extends React.Component {

    handleSubmit = () => {
        
        var name = document.getElementById('name').value;
        var description = document.getElementById('description').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
    
        var data = {};
        data.name = name;
        data.description = description;
        data.email = email;
        data.phone = phone;
        console.log(data);
		fetch("http://10.9.9.108:2001/dataupload", {
			method: "POST",
			body: JSON.stringify(data),
            mode: 'cors',
            headers:{
              "Content-Type":"application/json"  
            }
		}).then(res => res.json())
		.then(response=>{
			console.log(response)
            if(response.id){
                this.props.history.push('/Success');
            }
            else{
                this.props.history.push('/Register');
            }
		})
      }
    render() {
        return (
            
            <div className="container">
                <h4>Hi</h4>
                <h4>create your account</h4>
                  <input id="name" type="text"  className="form-control" /><br/>
                  <textarea id="description" type="text" className="form-control" /><br/>
                  <input id="email" type="email" className="form-control" required="true"/><br/>
                  <input id="phone" type="text" className="form-control" required="true"/><br/>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}