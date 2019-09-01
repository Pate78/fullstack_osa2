import React from 'react'
import RemoveButton from './Remove'

const Contact = ({ person, persons, setPersons }) => {
    // console.log('Person in Contact: ', person);
    
    return (
        <li>
            {person.name} {person.number} <RemoveButton person={person} persons={persons} setPersons={setPersons}/>
        </li>
    )
}

export default Contact