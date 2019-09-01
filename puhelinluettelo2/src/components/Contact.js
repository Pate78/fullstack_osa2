import React from 'react'
import RemoveButton from './Remove'

const Contact = ({ person, persons, setPersons, newNotification, setNewNotification }) => {
    // console.log('Person in Contact: ', person);
    
    return (
        <li>
            {person.name} {person.number}
            <RemoveButton
                person={person}
                persons={persons}
                setPersons={setPersons}
                newNotification={newNotification}
                setNewNotification={setNewNotification}/>
        </li>
    )
}

export default Contact