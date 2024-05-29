import React, { useState, useEffect } from "react";
import Weathercard from "./weathercard";
import "./style.css";

// jab hamm real world API se khel rhe to Error aa sakte he May be Possible so use Try and Catch by async await

const Temp = () => {
  
  const[searchValue,setSearchValue] = useState("mumbai");
  const[tempInfo,setTempTnfo] = useState({});

  const getWeatherInfo = async ()=>{
     try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7d6b32fab34568f97262ccd8c936b9cd`;
        const response = await fetch(url);
        const data = await response.json();
        const{temp,humidity,pressure} = data.main;
        const{main:weathermood} = data.weather[0];
        const{name} = data;
        const{speed} = data.wind;
        const{country,sunset,sunrise} = data.sys;

        const myNewWeatherInfo = {
          temp,
          humidity,
          pressure,
          weathermood,
          name,
          country,
          speed,
          sunset
        };

        setTempTnfo(myNewWeatherInfo);
        console.log(temp);
     }catch(error){
        console.log(error);
     }
  }

  useEffect(()=>{
   getWeatherInfo();
  },[]);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input type="search" 
          placeholder="search..."
          autoFocus
          id="search"
          className="searchTerm"
          value={searchValue}
          onClick={(event)=>setSearchValue(event.target.value)}
           />

          <button className="searchButton" type="button" onClick={getWeatherInfo}>
              Search
          </button> 

        </div>
      </div>


      {/* Our Temp Card */}
      <Weathercard tempInfo={tempInfo}/>
    </>
  )
}

export default Temp;
