import React from 'react'
import phonebookService from '../services/PhonebookService'

const Remove = ({ person, persons, setPersons }) => {
    const removePerson = ()=> {
        const props = {person:person, setPersons:setPersons, persons:persons}
        console.log('Remove.removePerson.props: ', props);
        if(window.confirm(`Really delete ${person.name}?`)===true) {
            console.log('Remove person confirmed');
            phonebookService
                .deleteContact(props)
                // Miten saa kontaktilistan päivittymään?
                // ei voi tehdä uutta phonebookService.getAll()
                // kutsua, koska async.
        }
    }

    return (
        <button onClick={removePerson} >Delete</button>
    )
}

export default Remove