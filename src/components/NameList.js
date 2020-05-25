import React, { Component } from 'react'
import Person from '../components/person'

export default class NameList extends Component {
    render() {
        let person = [
            {
                id: 1,
                name: 'Jignesh',
                age: 30,
                skills: 'node.js'
            },
            {
                id: 2,
                name: 'Nishit',
                age: 29,
                skills: 'fadu'
            }
        ]
  //      let name = ['Jignesh', 'Prajapti']
//        let nameList = name.map(x => <h1>{x}</h1>);
        //let personList = person.map(x => <div>I am {x.name}. I am {x.age} years old. I know {x.skills}</div>);
        let personList = person.map(person => <Person key={person.id} person={person} />)
        return (
            <div>{personList}</div>
        )
    }
}
