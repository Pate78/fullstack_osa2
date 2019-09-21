import React, { useState, useEffect } from 'react'
import Contact from './components/Contact'
import Filter from './components/Filter'
import Contacts from './components/Contacts';
import phonebookService from './services/PhonebookService'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  // console.log('App starting...');
  
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '050-6969 123' }
  ]) 
  const [ newName, setNewName ] = useState('Teppo Testaaja')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState('040-1234 567')
  const [ newFilter, setNewFilter ] = useState('')
  const [ newNotification, setNewNotification ] = useState('Uusi ilmoitus')

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
      console.log('App.js - addPerson starting...');
      
      console.log('find person result: ', persons.find(person => person.name === newName));
      const foundPerson = persons.find(person => person.name === newName)

      // if(foundPerson !== undefined) {
      //     if(window.confirm(`Person ${newName} already found. Do you want to change number?`) === true) {
      //         console.log('Person found. Changing number confirmed');
      //         const message = `Person ${newName} number changed`
      //         setNewNotification(message)
      //         setTimeout(() =>{
      //           setNewNotification(null) 
      //         },5000)
      //         const modifiedPerson = {...foundPerson, number:newPhoneNumber}
      //         const props = {
      //             person:modifiedPerson, 
      //             setPersons:setPersons, 
      //             persons:persons,
      //             newNotification,
      //             setNewNotification
      //           }
      //         phonebookService
      //           .update(props)
      //           // .then(response => console.log('App.update.response: ', response)
                
      //               // {
      //               // console.log('App.update person response: ', response)
                    
      //           //     // setPersons(persons.map(person => person.id === response.id ? response : person))
      //           // }
      //           // )
      //     }

      // } else {
          const newPerson = {name: newName, number: newPhoneNumber}
          phonebookService
            .create(newPerson)
            .then(response => {
                console.log('addPerson.response.data', response.data)
                setPersons(persons.concat(response.data))
                const message = `Person ${newPerson.name} added to contacts`
                console.log('addPerson.message');
                setNewNotification(message)
                setTimeout(() =>{
                   setNewNotification(null) 
                },5000)
            })
      // }
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
      <Notification message={newNotification} />
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
      <Contacts
        persons={persons}
        newFilter={newFilter}
        persons={persons}
        setPersons={setPersons}
        setNewNotification={setNewNotification}/>
      <div>debug: {newName}</div>
      <div>debug: {newPhoneNumber}</div>
    </div>
  )

}

export default App