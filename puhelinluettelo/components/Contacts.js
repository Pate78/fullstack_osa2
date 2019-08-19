import React, { useState } from 'react'

const Contacts = ({ contacts }) => {
    //console.log('contacts in Contacts: ', contacts);
 
    const rows = () => contacts.map(person => <Person key={person.name} name={person.name}/>)

        return (
            <div>
                This is contacts!! <br />¨
                <ul>{rows()}</ul>
            
            </div>
    )
}

const Person = ( props ) => {
    //console.log('Person: props: ', props);
    return (
        <li>
             {props.name}
        </li>
    )
}

export default Contacts