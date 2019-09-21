import React from 'react'
import Contact from './Contact'

const Contacts = ({ persons, newFilter, setPersons, newNotification, setNewNotification }) => {
    // console.log('Contacts.persons: ',persons);
    
    const personsToShow = persons.filter(person => person.name.includes(newFilter))

    const rows = () => personsToShow.map(person => {
        // console.log('Single person.id + person.name in list:', person.id, person.name);
        const id = person.id
        return (
            <Contact 
                key={person.id}
                person={person}
                persons={persons}
                setPersons={setPersons}
                newNotification={newNotification}
                setNewNotification={setNewNotification}/>
        )
    })

    return (
        <ul>
            {rows()}
        </ul>
    )
}

export default Contacts