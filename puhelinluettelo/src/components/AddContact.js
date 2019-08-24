import React from 'react'

const AddContact = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {

    const addContact = (event) => {
        event.preventDefault()
        const newPersonObj = {
            name:newName,
            number:newNumber
        }
        // setPersons(persons.concat(newPersonObj)) 
        
        persons.find((person) => person.name === newPersonObj.name) === undefined ?
        setPersons(persons.concat(newPersonObj)) : alert(`${newName} is in contacts already`)
        setNewName('')
        setNewNumber('')
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
