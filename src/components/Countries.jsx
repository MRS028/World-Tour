/* eslint-disable react/jsx-key */


import { useEffect } from "react";
import { useState } from "react";
import Country from "./country";

function Countries() {
    const [countries, setCountries] = useState([]);
    const[visitedCountries,setVisitedCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    });
    const handleVisitedCountry = country =>{
        console.log('add your country');
        console.log(country);

    }


    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries</h5>
            </div>
            <div className="country-container">
            {countries.map(country => <Country country={country}
            handleVisitedCountry ={handleVisitedCountry}
            >

            </Country>)}
            </div>

        </div>
    );
}

export default Countries;