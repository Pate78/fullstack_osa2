import React, { useState } from 'react'
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import AddContact from './components/AddContact'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0400-333 4444' },
    { name: 'Teppo Tuunaaja', number: '040-7654321'}
  ]) 
  const [ newName, setNewName ] = useState('Uusi nimi')
  const [ newNumber, setNewNumber ] = useState('040-1234567')
  const [newFilter, setNewFilter] = useState('')
  const filteredPersons = newFilter !== undefined ? 
    persons.filter((person) => person.name.includes(newFilter) ) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setNewFilter={setNewFilter} newFilter={newFilter}/>

      <AddContact
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber} 
        setNewNumber={setNewNumber}
        />
      <h2>Numbers:</h2>
      <Contacts contacts={filteredPersons} />
      <div>debug: {newName}</div>
      <div>debug: {newNumber}</div>
    </div>
  )

}

export default App