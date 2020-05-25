import React from 'react'

export default function person({ person}) {
    return (
        <div>
            I am {person.name}. I am {person.age} years old. I know {person.skills}
        </div>
    )
}
