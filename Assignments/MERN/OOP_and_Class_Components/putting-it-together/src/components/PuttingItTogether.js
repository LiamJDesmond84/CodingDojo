import React, { Component } from 'react';


    

class PuttingItTogether extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    addAge = () => {
        this.setState({ age: this.state.age + 1 })
    }
    
    render() {

        return (
            <div>
                <h1>{ this.props.lastName }, { this.props.firstName }</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <br/>
                <button onClick={ this.addAge }>Birthday Button</button>
            </div>
        )
    }
}

export default PuttingItTogether


