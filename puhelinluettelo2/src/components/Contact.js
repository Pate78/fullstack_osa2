import React from 'react'
import RemoveButton from './Remove'

const Contact = ({ person, setPersons }) => {
    // console.log('Person in Contact: ', person);
    
    return (
        <li>
            {person.name} {person.number} <RemoveButton person={person} setPersons={setPersons}/>
        </li>
    )
}

export default Contact