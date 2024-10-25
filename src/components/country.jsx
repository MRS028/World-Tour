/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Country.css';
const Country = ({country,handleVisitedCountry}) => {
   const {name,flags,population,area,cca3} = country;
    const [Visited,setVisited] =useState(false);
   const handleVisited = () =>{
    setVisited(!Visited);
   }
//    console.log(handleVisitedCountry);
   return (
        <div className={`country ${Visited ? 'visited' : 'Not-Visited'}`}>
            <h3 style={{color: Visited ? 'Purple': 'white'}}>Name: {name.common}</h3> 
            <div className='flag-container' >
                <img src={flags.png} alt="" />
            </div>
            
            <p>Population:{population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={handleVisited}>{Visited ? 'Visited': 'Going' }</button>
            {Visited ?' I have visited this Country.' : 'i want to visit.'}
        </div>
    );
};

export default Country;