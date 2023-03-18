import axios from "axios"
import { useEffect, useState } from "react";
import {  CountryType} from "./Types";
import { v4 as uuidv4 } from 'uuid';

//

function App() {
   const testID =  Number (uuidv4)
   const [countries,setCountries] = useState <CountryType[]> ([]);

    const getCountries = async () => {
      try{
        const {data} = await axios.get<CountryType[]>("https://restcountries.com/v3.1/all");
        setCountries(data);
         }
         catch{
          console.log("err"); 
         }
     };

     useEffect(() => {
      getCountries();
     },[]) ;
   
  
     return ( 
      <div>
        <ul>
          {countries.map((country) => (
           <ul>
               <li key={testID} >{country.flag}</li>
           </ul>
          ))}
          
        </ul>
      </div>
         
    );}

export default App;