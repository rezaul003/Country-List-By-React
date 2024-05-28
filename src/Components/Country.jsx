import  './Country.css'
import React, { useState } from 'react';

const Country = ({country, handleVisitedCountries}) => {
    const {name, flags, cca3} = country;

    const [visited, setVisited] = useState(false)
    const handleVisited = () =>{
        setVisited(!visited);
    }

    const passWithParams = () =>{
        handleVisitedCountries(country);
    }



    return (
        <div className={`country ${visited && 'visited'}` }>
            <h3>Name:{name.common} </h3>
            <hr />
            <img src={flags.png} alt="" />
    
            <small>code: {cca3}</small>
            <hr />
            <button style={{margin: '10px'}} className= {` ${visited && 'visitedbtn'}` } onClick={handleVisited} >{visited? 'visited' : 'Visit'}</button>
            <br />

            <button onClick={() => handleVisitedCountries(country)} >Mark Visited</button>

        </div>
    );
};

export default Country;
