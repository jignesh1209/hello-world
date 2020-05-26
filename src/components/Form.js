import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            topic:'react'
        }
    }
    changeEventHandler = (event) => { 
        this.setState({
            username: event.target.value
        });
    }

    changeSelectHandler = (event) => { 
        this.setState({
            topic: event.target.value
        });
    }

    handleSubmit = (event) => { 
        alert(`${this.state.username} ${this.state.topic}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.changeEventHandler} />
                </div>
                
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.changeSelectHandler}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                
                <div>
                    <button type="submit">Submit</button>
                </div>
                
            </form>
        )
    }
}
