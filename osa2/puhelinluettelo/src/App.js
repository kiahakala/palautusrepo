import React, { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'


const App = () => {
  const [ persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

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