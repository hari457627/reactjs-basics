import React from 'react';

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age : props.user.age,
            propData: {name: ""}
        }
    }

    // increaseAge(){
    //     this.setState({
    //         age : this.state.age + 3
    //     })
    // }

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <h4>this is body</h4>
                <h4>content of the body</h4>
                <h4>name : {this.props.user.name}</h4>
                <h5>age : {this.props.user.age}</h5>
                <h5 className="hobbiesList">Hobbies</h5>
                <ul>
                    {this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}
                </ul>
                <button onClick={() => this.props.onchangeage()} className="btn btn-primary">increase age</button>
                <hr />
                <button onClick={() => {
                    let myData = this.props.greet();
                    this.setState({propData: myData})
                    }} className="btn btn-success">clicke me</button>
                <h2>{this.state.propData.name}</h2>
            </div>
        );
    }
}