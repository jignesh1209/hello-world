import React, { Component } from 'react'

/*
There are four ways to bind event 
1. with .bind() method

2. With Arrow function

3. Initialize in constructor of binding.

4. Create arrow function with separate name;
*/
export default class Eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
        //. 3 type
        //this.clickBind = this.clickBind.bind(this);
    }
    
    // clickBind() {
    //     this.setState({
    //         message:'GoodBye'
    //     });
    // }

    // 4 method
    clickBind = () => { 
        this.setState({
            message:'Good bye all'
        });
    }


    render() {
        return (
            <div>
                {this.state.message} <br/>
                {/* <button onClick={this.clickBind.bind(this)}>Event Click</button> // 1 method */} 
                {/* <button onClick={() => this.clickBind()}>Event Click</button> // 2 method */} 
                <button onClick={this.clickBind}>Event Click</button> 
            </div>
        )
    }
}
