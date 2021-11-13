import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Search = (props) => {
  return (
  <div>
  <input 
    type="search"
    value={props.countryEntered}
    onChange={props.onChange}
    />  
</div>
  )
}

const CountryName = (props) => {
  return (
  <div>
      <ul>{props.name}</ul>
      <Button onClick={() => 
       props.onClick(props.name)}/>
  </div>
  )
}

const Button = (props) => {
  return (
  <button onClick={props.onClick}>show</button>
  )
}

const CountryInfo = (props) => {
  const [weather, setWeather] = useState()

  const hook = () => {
    const api_key = process.env.REACT_APP_API_KEY
    const params = {
      access_key: api_key,
      query: props.capital
    }
    axios
    .get('http://api.weatherstack.com/current', {params})
      .then(response => {
        setWeather(response.data)
      })
  }
  useEffect(hook, [props.capital])

  return (
    <div>
    <h2>{props.name}</h2>
    <p>Capital: {props.capital}</p>
    <p>Population: {props.population}</p>
    <img width="200" height="100" src={props.flag} alt="flag" />
    <h3>Languages</h3>
    {props.languages.map(language => <li key={language.name}>{language.name}</li>)}
    <br /> 
    {weather &&
    <Weather 
    capital={props.capital}
    temperature={weather.current.temperature} 
    wind_speed={weather.current.wind_speed}
    wind_dir={weather.current.wind_dir}
    weather_descriptions={weather.current.weather_descriptions}
    weather_icon={weather.current.weather_icons}/>} 
    </div>
  )
}

const Weather = (props) => {
  const date = new Date();

  return (
    <div>
    <h4>Current weather in {props.capital}</h4>
    <img width="100" height="100" src={props.weather_icon} alt="weather_icon" />
    <li>{props.temperature} degrees Celsius</li>
    <li>Wind {props.wind_speed} mph, direction {props.wind_dir}</li>
    <li>{props.weather_descriptions}</li>
    <br />
    <br/>
    <div>Data collected {new Intl.DateTimeFormat('en-EN').format(date)}</div>
    </div>
  )
}

const ShowCountryInfo = (props) => {
  return (
  props.filteredData.map(country =>
    <CountryInfo 
      key={country.name} 
      name={country.name}
      capital={country.capital}
      population={country.population}
      flag={country.flag}
      languages={country.languages} />
      )
  )
}

const ShowFilteredCountries = (props) => {
  return (
  props.filteredData.length < 10 ? 
  props.filteredData.map(country =>
    <>
    <CountryName
      key={country.name} 
      name={country.name} 
      onClick={props.onClick}/>
    </> ) : 'Too many matches, please specify'
  )
}

const App = (props) => {

const [ countries, setCountries ] = useState([])
const [ countryEntered, setCountryEntered ] = useState('')

const filteredData = countryEntered
  ? countries.filter(country => country.name.toLowerCase().includes(countryEntered.toLowerCase()))
  : countries

  const hook = () => {
    axios
     .get('https://restcountries.com/v2/all')
     .then(response => {
       setCountries(response.data)
     })
   }
   useEffect(hook, [])

   console.log(countries)

const onClick = (name) => setCountryEntered(name)

const handleFilter = (e) => {
  setCountryEntered(e.target.value) 
}

return (
<div>
  <div>Find Countries: 
    <Search
      onChange={handleFilter}
      countryEntered={countryEntered}
    />
  </div>
  {filteredData.length === 1 
    ? <ShowCountryInfo
        filteredData={filteredData}/>
    : <ShowFilteredCountries
        filteredData={filteredData}
        onClick={onClick}/>
  }
</div>
)
}

export default App

