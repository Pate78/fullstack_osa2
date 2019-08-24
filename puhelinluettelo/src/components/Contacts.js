import React from 'react'

const Contacts = ({ contacts }) => {
    //console.log('contacts in Contacts: ', contacts);
 
    const rows = () => contacts.map(person => 
        <Person key={person.name} name={person.name} number={person.number}/>)

        return (
            
            <div>
                <ul>{rows()}</ul>
            
            </div>
    )
}

const Person = ( props ) => {
    //console.log('Person: props: ', props);
    return (
        <li>
             {props.name} {props.number}
        </li>
    )
}

export default Contacts