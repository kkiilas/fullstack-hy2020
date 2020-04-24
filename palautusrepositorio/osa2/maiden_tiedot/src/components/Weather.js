import React from 'react'

const Weather = ({ temperature, weather_icon, wind_speed, wind_dir }) => (
  <div>
    <div><b>temperature: </b>{temperature} Celsius</div>
    <img src={weather_icon} alt="weather icon" />
    <div><b>wind: </b> {wind_speed} mph direction {wind_dir} </div>
  </div>
)

export default Weather