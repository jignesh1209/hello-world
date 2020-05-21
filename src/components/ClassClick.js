import React, { Component } from 'react'

export default class ClassClick extends Component {
    Clickme(name) {
        console.log("Class button clicked " + name);
    }
    render() {
        return (
            <div>
                <button onClick={() => { this.Clickme('Jignesh') }}>Click me</button>
            </div>
        )
    }
}
