import React from 'react';
import{ createStore } from 'redux';

const reducer = function(state,action){
    if(action.type === "inc"){
        return state+action.payload;
    }
    else if(action.type === "dec"){
        return state-action.payload;
    }
    else{
        return state;
    }
}

const store = createStore(reducer,0);

store.subscribe((() => {
    console.log("store changed" + store.getState());
}))

store.dispatch({type:"inc",payload:1});
store.dispatch({type:"inc",payload:1});
store.dispatch({type:"inc",payload:1});
store.dispatch({type:"inc",payload:1});
store.dispatch({type:"dec",payload:1});
store.dispatch({type:"dec",payload:1});
store.dispatch({type:"dec",payload:1});
store.dispatch({type:"dec",payload:1});



export class Redux extends React.Component {
    componentDidMount(){
        $(this.refs.datepicker).datepicker({language: 'en',minDate: new Date()});
        $('.sample').css({"color":"red"});
      }
      
    render() {
        return (
            <div className="container">
                <h3>hi redux</h3>
                <input className="form-control" ref='datepicker'/><br />
                <div className="sample">
                    jquery content
                </div>
            </div>
        );
    }
}