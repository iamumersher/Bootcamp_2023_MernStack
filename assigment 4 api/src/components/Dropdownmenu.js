import React from 'react';
import { useState } from 'react';
function Dropdownmenu(){
    const countries_cities =[
        { country_name: "Select Country" ,value:""},
       { country_name: "pakistan" ,value:"pakistan" , cities:["karachi","islamabad","lahore"]},
       { country_name: "usa" ,value:"usa" , cities:["chicago","houston","new york"]}

    ];
    const[countries,setCountries] = useState("countries");
    const[cities,setCities]=useState([""]);
    const[city,setCity]=useState("");
    const[result,setresult]=useState("");

function selctcountry(event){
 setCountries(event.target.value);
 setresult("");
 const selectedCities = countries_cities.find(data=> data.value && data.value===event.target.value);
 if(selectedCities){
 setCities(selectedCities.cities);
 }
 else{
    setCountries("");
    setCities([""]);
 }
 console.log(cities);
}
function weatherapicall(event){
    setCity(event.target.value);
    const city_temp=event.target.value;
    if(event.target.value){


        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city_temp+"&appid=cd0aab3ba61e4af27742fa6aa6fd4cdd").then((response)=>response.json()).then((data)=>{
                 const cel=data.main.temp-273.15;
                 setresult("Weather of "+city_temp+" is : "+parseInt(cel)+" C°");
            
            
            
            }).catch((error)=>console.log(error));
            console.log(event.target.value);
                    
    }
}

    return(
        <>
<select value={countries} className="select" onChange={selctcountry}>
   
    {countries_cities.map((key,i)=>{
        
        return (<option key={i} value={key.value}>{key.country_name}</option>)
        
})
}


</select>
<select className="select" value={city} onChange={weatherapicall} >
    <option value={""}>Select city</option>
    {cities.map((key,i)=>(<option key={i} value={key}>{key}</option>))}


</select>
<h1 className='result'>{result}</h1>
</>
        );
}
export default Dropdownmenu;