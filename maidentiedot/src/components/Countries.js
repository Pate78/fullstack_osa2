import React from 'react';
import Country from './Country'


const Countries = ({ filteredCountries }) => {
    const rows = () => filteredCountries.map(country => {
        console.log('country:', country);
        return <li key={country.name}>{country.name}</li>
    })
    
    if(filteredCountries.length >10) {
        console.log('filteredCountries.length', filteredCountries.length);
        return (<div>Too many results</div>)
    } else if (filteredCountries.length === 1) {
        console.log('else if (filteredCountries.length === 1)',filteredCountries.length);
        return(<Country country={filteredCountries[0]}/>)
    }
    return (<div>{rows()}</div>)
}

export default Countries