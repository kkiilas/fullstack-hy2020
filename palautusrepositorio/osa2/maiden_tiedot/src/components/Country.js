import React from 'react'

const Country = ({ name, handleShowClick }) => (
  <div>
    {name} <button
      value={name}
      onClick={handleShowClick}>
      show</button>
  </div>
)

export default Country