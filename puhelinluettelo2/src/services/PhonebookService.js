import React from 'react'
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => {
        console.log('PhonebookService.getAll().response: ',response);
        return response.data
    })
}

const create = newPerson => {
    // const request = axios.post(baseUrl, newPerson)
    // return request.then(response => {
    //     console.log('PhonebookService.create.response.data: ', response.data);
        return axios.post(baseUrl, newPerson)
    // })
}

const update = (props) => {
    const url = baseUrl+'/'+props.person.id
    console.log('PhonebookService.update.url: ', url);
    console.log('phonebookService.update.person: ', props.person);
    const request = axios.put(url, props.person)
    request.then(response => {
        console.log('phonebookService.update.response.data: ', response.data);
        
        props.setPersons(props.persons.map(person1 => props.person.id !== person1.id ? person1 : props.person))
    })
}

const deleteContact = (props) => {
    console.log('PhonebookService.deleteContact.props.setNewNotification', props.setNewNotification)
    const url = baseUrl+'/'+props.person.id
    console.log('PhonebookService.delete.url: ', url);
    axios
        .delete(url,props.person.id)
        .then(res => {
            const message = `Person ${props.person.name} deleted`
            props.setNewNotification(message)
            setTimeout(() =>{
                props.setNewNotification(null) 
            },5000)
            props.setPersons(props.persons.filter(person1 => props.person.id !== person1.id))
        })
}

export default {
    getAll,
    create,
    update,
    deleteContact
}