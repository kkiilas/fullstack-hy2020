import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [showCountries, setShowCountries] = useState(true)
  const [weather, setWeather] = useState({
    temperature: 0,
    weather_icon: '',
    wind_speed: 0,
    wind_dir: ''
  })
  const api_key = process.env.REACT_APP_API_KEY

  const getWeather = (capital) => {
    const params = {
      access_key: api_key,
      query: capital,
      units: 'm'
    }
    axios
      .get('http://api.weatherstack.com/current', { params })
      .then(response => {
        const apiResponse = response.data.current
        const newWeather = {
          temperature: apiResponse.temperature,
          weather_icon: apiResponse.weather_icons[0],
          wind_speed: apiResponse.wind_speed,
          wind_dir: apiResponse.wind_dir
        }
        setWeather(newWeather)
      })
  }

  const handleFilterChange = (event) => {
    setShowCountries(true)
    setFilter(event.target.value)
    const filteredCountries = countries
      .filter(({ name }) =>
        name.toLowerCase().includes(event.target.value.toLowerCase()))
    if (filteredCountries.length === 1) {
      const capital = filteredCountries[0].capital
      getWeather(capital)
    }
  }

  const handleShowClick = (event) => {
    setShowCountries(false)
    setFilter(event.target.value)
    const capital = countries.find(({ name }) => name === event.target.value).capital
    getWeather(capital)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Countries
        countries={countries}
        filter={filter}
        showCountries={showCountries}
        handleShowClick={handleShowClick}
        weather={weather}
      />
    </div>
  )
}

export default App