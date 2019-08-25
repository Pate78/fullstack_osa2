import React from 'react'
import phonebookServices from '../services/phonebook'

const Contacts = ({ contacts, setPersons }) => {
    //console.log('contacts in Contacts: ', contacts);
 
    const rows = () => contacts.map(person => 
        <Person key={person.name} person={person} setPersons={setPersons}/>)

    return (
        
        <div>
            <ul>{rows()}</ul>
        
        </div>
    )
}

const Person = ( {person, setPersons} ) => {
    console.log('person.id: ', person.id);
    return (
        <li>
            {person.name} {person.number} <RemovePersonButton person={person} setPersons={setPersons}/>
        </li>
    )
}

const RemovePersonButton = ({person,setPersons}) => {
    // console.log('Person in removePerson: ',person);

    const remove = () => {
        phonebookServices
            .remove(person.id)
        phonebookServices
            .getAll()
            .then(response => setPersons(response))
    }

    return (
        <button onClick={remove}>delete</button>
    )
    
}

export default Contacts