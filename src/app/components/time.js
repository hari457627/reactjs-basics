import React from 'react';

export class Time extends React.Component {
    constructor(){
        super();
        this.state = {
           time  : new Date().toLocaleTimeString()
        }
        // this has to be figured (if we use line num 15, then line 10 should be removed)
        this.tick = this.tick.bind(this);
    }
    componentDidMount(){
        setInterval(this.tick, 1000);
    }
    // tick = () => {}
    tick () {
        this.setState(
            {
                time  : new Date().toLocaleTimeString()
            }
        )
    }
    
    render() {
        return(
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.time}.</h2>   
            </div>
        )
}
}