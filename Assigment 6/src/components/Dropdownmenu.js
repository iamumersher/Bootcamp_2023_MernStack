import React from 'react';
import { useState } from 'react';
import {useQuery} from "react-query";
function Dropdownmenu(){
    const countries_cities =[
        { country_name: "Select Country" ,value:""},
       { country_name: "pakistan" ,value:"pakistan" , cities:["karachi","islamabad","lahore"]},
       { country_name: "usa" ,value:"usa" , cities:["chicago","houston","new york"]}

    ];
    const[countries,setCountries] = useState("countries");
    const[cities,setCities]=useState([""]);
    const[city,setCity]=useState("");
   
    const fetchdata = async (c)=>{
        const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+c+"&appid=cd0aab3ba61e4af27742fa6aa6fd4cdd");
       return res.json(); 
    }       
    const {data,status}= useQuery(fetchdata);


function selctcountry(event){
 setCountries(event.target.value);
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
        debugger;
      fetchdata(city_temp);


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
<div className='result'>
    {status ==="error" && <p> error fetching data</p> }
    {status === "loading" && <p>fetching data...</p>}
    {status === "success" && <p>success</p>}
</div>
</>
        );
}
export default Dropdownmenu;