import './Countries.css'
import Country from './Country';
import React, { useEffect, useState } from 'react';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    
    const handleVisitedCountries = country => {
        console.log(country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }


    return (
        
        <div>
             <h2>Visited Countries:{visitedCountries.length} </h2>
             <ol className='country-list'>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li> )
                }
             </ol>


            <div className='countries-container'>
            {
                countries.map(country => <Country key={country.car.cc2}
                    handleVisitedCountries = {handleVisitedCountries} country ={country}></Country> )
            }
            </div>
        </div>
    );
};

export default Countries;
