import React from 'react'
import Country from './Country'
import CountrySummary from './CountrySummary'

const Countries = ({ countries, filter, showCountries, handleShowClick, weather }) => {
  
  const filteredCountries = showCountries
    ? countries.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
    : countries.filter(({ name }) => name === filter)

  const countriesToShow = (filter === '' || filteredCountries.length === 0)
    ? ''
    : (filteredCountries.length > 10)
      ? 'Too many matches, specify another filter'
      : (filteredCountries.length > 1)
        ? filteredCountries.map((country, i) =>
          <Country key={i} name={country.name} handleShowClick={handleShowClick} />)
        : <CountrySummary country={filteredCountries[0]} weather={weather} />

  return (
    <div>
      {countriesToShow}
    </div>
  )
}

export default Countries