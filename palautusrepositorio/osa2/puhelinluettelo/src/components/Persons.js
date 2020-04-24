import React from 'react'
import Person from './Person'

const Persons = ({ persons, filter, handleDeleteClick }) => {
  const personsToShow = (filter === '')
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter))

  return (
    <div>
      {personsToShow.map((person, i) =>
        <Person
          key={i}
          person={person}
          handleDeleteClick={handleDeleteClick}
        />
      )}
    </div>
  )
}

export default Persons