import React from 'react'

export default function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=> props.childClick('Child name')} >Greet Component</button>
        </div>
    )
}
