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

const update = (person) => {
    const url = baseUrl+'/'+person.id
    console.log('PhonebookService.update.url: ', url);
    console.log('phonebookService.update.person: ', person);
    const request = axios.put(url, person)
    request.then(response => response.data)
    
}

const deleteContact = (props) => {
    console.log('PhonebookService.deleteContact.props', props)
    const url = baseUrl+'/'+props.person.id
    console.log('PhonebookService.delete.url: ', url);
    axios
        .delete(url,props.person.id)
        .then(res => props.setPersons(props.persons.filter(person1 => props.person.id !== person1.id)))
}

export default {
    getAll,
    create,
    update,
    deleteContact
}