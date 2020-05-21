import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() { 
        super();
        this.state = {
            count:0
        }
    }

    Increment() { 
        //one way to do it
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { 
        //         console.log('Counter', this.state.count)
        // });
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }));
    }

    IncrementFive() {
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
    }

    render() {
        return (
            <div>
                Count {this.state.count}
                <br/>
                <button onClick={() => this.IncrementFive()} >Increment</button>
            </div>
        )
    }
}
