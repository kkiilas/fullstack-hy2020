import React from 'react'
import Languages from './Languages'
import Weather from './Weather'

const CountrySummary = ({ country, weather }) => (
  <div>
    <h2>{country.name}</h2>
    <div>
      capital {country.capital}
    </div>
    <div>
      population {country.population}
    </div>
    <h3>Spoken languages</h3>
    <Languages languages={country.languages} />
    <img src={country.flag} alt="flag" height="85px" width="130" />
    <h3>Weather in {country.capital}</h3>
    <Weather
      temperature={weather.temperature}
      weather_icon={weather.weather_icon}
      wind_speed={weather.wind_speed}
      wind_dir={weather.wind_dir}
    />
  </div>
)

export default CountrySummary