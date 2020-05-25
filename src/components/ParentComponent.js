import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Parent component"
        }
        this.childComponent = this.childComponent.bind(this);
    }

    childComponent(childName) {
        alert(`Hello ${this.state.message} from ${childName}`);
    }
    
    render() {
        return (
            <div>
                <ChildComponent childClick={this.childComponent} />
            </div>
        )
    }
}

export default ParentComponent
