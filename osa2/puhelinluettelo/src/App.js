import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {

  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  // then is an event listener & response function is an event handler
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')
  // Jos toisena parametrina on tyhjä taulukko [], suoritetaan efekti ainoastaan komponentin ensimmäisen renderöinnin jälkeen.

  const handleNameAddition = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberAddition = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilterName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    }
    const nameExists = persons.some(person => person.name === nameObject.name)
    if (nameExists) {
      return alert(`${newName} is already added to phonebook`) 
    } 
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

return (
  <div>
    <h1>Phonebook</h1>
    <Filter filterName={filterName} handleFilter={handleFilter} />
    <PersonForm addPerson={addPerson} newName={newName} handleNameAddition={handleNameAddition} newNumber={newNumber} handleNumberAddition={handleNumberAddition} />
    <Persons persons={persons} filterName={filterName} />
  </div>
)

  // return (
  //   <div>
  //     <h1>Phonebook</h1>
  //     <div>Filter Names:
  //     <input
  //         value={filterName}
  //         onChange={handleFilter}
  //       />
  //     </div>
  //     <form onSubmit={addPerson}>
  //     <h2>Add New Number</h2>
  //       <div>Name:
  //       <input
  //         value={newName}
  //         onChange={handleNameAddition}
  //       />
  //       </div>
  //       <div>Number:
  //       <input
  //         value={newNumber}
  //         onChange={handleNumberAddition}
  //       />
  //       </div>
  //       <button type="submit">Add</button>
  //     </form>  
  //     <h2>Numbers</h2>
  //      <ul>{filterName.length > 1 ? persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase())).map(person => 
  //           <Person key={person.id} person={person} />) : persons.map(person => 
  //             <Person key={person.id} person={person}/>)
  //             }
  //     </ul> 
  //   </div>
  // )
}

export default App