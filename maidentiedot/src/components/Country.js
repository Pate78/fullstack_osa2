import React, {useEffect} from 'react';
import axios from 'axios'

const Country = ({country}) => {
    console.log('Country: ', country, 'Languages: ', country.language);

    const languages = country.languages.map(language => {
        console.log('Language: ', language);
        return(<li key={language.name}>{language.name}</li>)
    })


    
    return (
        <div>
            <h2>{country.name}</h2>
            Capital: {country.capital}<br />
            Population: {country.population}<br />
            <p>
                Languages: {languages}
            </p>
            <p>
               <img src={country.flag} height='50' width='50'/>
            </p>
        </div>
    )
}

export default Country