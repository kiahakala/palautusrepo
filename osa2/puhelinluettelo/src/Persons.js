import React from 'react'
import Person from './Person'

const Persons = ({ persons, filterName }) => {
  return (
    <div> 
      <h2>Numbers</h2>
       <ul>{filterName.length > 1 ? persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase())).map(person => 
            <Person key={person.id} person={person} />) : persons.map(person => 
              <Person key={person.id} person={person}/>)
              }
      </ul> 
    </div>
  )
}

export default Persons