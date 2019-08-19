import React, { useState } from 'react'
import Contacts from './components/Contacts'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('Uusi nimi')

  const addContact = (event) => {
      event.preventDefault()
      const newPersonObj = {
          name:newName
      }
      setPersons(persons.concat(newPersonObj))
      setNewName('')
      //console.log('Button clicked: newPersonObj: ',newPersonObj);
  }

  const handleNewContact = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)

  }

 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}> 
        <div>
          name: <input value={newName} onChange={handleNewContact}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Contacts contacts={persons} />
      <div>debug: {newName}</div>
    </div>
  )

}

export default App
