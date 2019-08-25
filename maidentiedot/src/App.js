import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
    const [newFilter, setNewFilter] = useState('');
    const [allCountries, setAllCountries] = useState([])
    


    useEffect(() => {
        console.log('effect')
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            console.log('promise fulfilled')
            console.log('All countries: ', response.data);
            setAllCountries(response.data)
          })
      }, [])
    console.log('render', allCountries.length, 'allCountries')

    const filteredCountries = newFilter !== undefined ? 
        allCountries.filter((country) => 
        country.name.includes(newFilter)) :
        allCountries

    return(
        <div>
            <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>
            <Countries filteredCountries={filteredCountries}/>
        </div>
    )
}

export default App