import React, { useState, useEffect } from "react";
import {fetchCountries} from "../../api";
import "../CountryPicker/CountryPicker.css";



const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries,setfetchedCountries] = useState([]);
    useEffect(()=>{
        const fetchedApi =async()=>{
            setfetchedCountries(await fetchCountries());
        }
        fetchedApi();
    },[setfetchedCountries]);
    

  return (
    <>
   <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
            select country
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
            
          {fetchedCountries.map ((country,i)=><li   key={i} value={country} onClick={()=>{handleCountryChange(country)}}className="dropdown-item">{country}</li>)}
        </ul>
      </div>
 </>
  );
};
export default CountryPicker;
