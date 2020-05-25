import React, { Component } from 'react'

export default class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLogging: true
        }
    }
    

    render() {
        let message = (this.state.isLogging ? 'Jignesh' : 'Guest');
        return (
            <div>
                Welcom {message}
            </div>
        )
    }
}
