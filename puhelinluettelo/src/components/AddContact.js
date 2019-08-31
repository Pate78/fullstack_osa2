import React from 'react'
import phonebookServices from '../services/phonebook'

const AddContact = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {

    const addContact = (event) => {
        event.preventDefault()
        const newPersonObj = {
            name:newName,
            number:newNumber
        }
        // setPersons(persons.concat(newPersonObj)) 
        
        const addNewPersonToContacts = person => {
          setNewName('')
          setNewNumber('')
          phonebookServices
            .create(newPersonObj)
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
          })

        }
        const changePhoneNumber = (newPersonObj) => {
          const changeConfirmed = window.confirm(`${newName} is in contacts already do you want to change phone number?`)
          if(changeConfirmed) {
            const person =  persons.find(person => person.name === newPersonObj.name)
            const changedPerson = { ...person, number: newPersonObj.number }
            phonebookServices
              .update(person.id,changedPerson)
              .then(response => {
                console.log('response in changePhoneNumber: ', response);
                setPersons(persons.map(person => 
                  person.id !== newPersonObj.id ? person : response.data))
              })
            console.log('changedPerson: ', changedPerson);
            // phonebookServices
            //   .getAll()
            //   .then(returnedPersons => {
            //     console.log('returnedPerson:', returnedPersons);
            //     setPersons(returnedPersons)
            //   })

          }
        }
      persons.find((person) => person.name === newPersonObj.name) === undefined ? 
      addNewPersonToContacts(newPersonObj) : changePhoneNumber(newPersonObj)
        
        //console.log('Button clicked: newPersonObj: ',newPersonObj);
    }


    const handleNewContact = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
      }
    
      const handleNewNumber = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
      }

    return (
        <form onSubmit={addContact}> 
        <h3>Add new</h3>
        <div>
          name: <input value={newName} onChange={handleNewContact}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNewNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )

}

export default AddContact
