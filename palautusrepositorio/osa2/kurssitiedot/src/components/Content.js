import React from 'react'
import Part from './Part'

const Content = ({ parts }) => (
  <div>
    {parts.map((part, i) =>
      <Part key={part.id} part={part} />
    )}
  </div>
)

export default Content