import React, { useState, useEffect } from 'react'
import Contact from './components/Contact'
import Filter from './components/Filter'
import Contacts from './components/Contacts';
import phonebookService from './services/PhonebookService'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '050-6969 123' }
  ]) 
  const [ newName, setNewName ] = useState('Uusi Nimi')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState('040-1234 567')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    console.log('effect')
    phonebookService
      .getAll()
      .then(response => {
        // console.log('promise fulfilled')
        // console.log(response);
        setPersons(response)
      })
  }, [])

  //Add person event handler
  const addPerson = (event) => {
      event.preventDefault()
      console.log('Add person clicked', event.target.value);
      const newPerson = {name: newName, number: newPhoneNumber}
      console.log('find person result: ', persons.find(person => person.name === newPerson.name));
      
      if(persons.find(person => person.name === newPerson.name) !== undefined) {
          alert(`Person ${newPerson.name} already found`)
      } else {
          phonebookService
            .create(newPerson)
            .then(response => {
                console.log('addPerson.response', response.data)
                setPersons(persons.concat(response.data))
            })
      }
  }

  // Handle input change
  const handlePersonNameChange = (event) => {
      console.log(event.target.value);
      setNewName(event.target.value)
  }
  const handlePhoneNumberChange = (event) => {
      console.log(event.target.value)
      setNewPhoneNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>
      <form onSubmit={addPerson}>
        <div>
            <div>
                name:
                <input 
                value={newName}
                onChange={handlePersonNameChange}/>
            </div>
            <div>
            Phone:
                <input
                value={newPhoneNumber}
                onChange={handlePhoneNumberChange} />
            </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Contacts persons={persons} newFilter={newFilter} persons={persons} setPersons={setPersons}/>
      <div>debug: {newName}</div>
      <div>debug: {newPhoneNumber}</div>
    </div>
  )

}

export default App