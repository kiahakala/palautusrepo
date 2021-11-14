import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Person from './Person'
import personService from './services/persons'

const App = () => {

  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ successMessage, setSuccessMessage ] = useState('')

  // then is an event listener & response function is an event handler
  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])
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
      name: newName,
      number: newNumber,
    }
    const nameExists = persons.find(person => person.name === nameObject.name)
    if (nameExists) {
      if (window.confirm(`${newName} already exists. Replace the number with a new one?`)) {
        personService
          .update(nameExists.id, nameObject).then(returnedPerson => {
            setPersons(persons.map(person => person.id !== nameExists.id ? person : returnedPerson))
            setSuccessMessage(
              `Number of ${nameExists.name} was updated`
            )
          })
          setTimeout(() => {
            setSuccessMessage(null)
          }, 3000)
      }
    } else {
    personService
    .create(nameObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
    }
    )
    
    setNewName('')
    setNewNumber('')
    setSuccessMessage(
      `${newName} was added`
    )
    setTimeout(() => {
      setSuccessMessage(null)
    }, 3000)
    }
  }

  const deletionOf = (id) => {
    const url = `http://localhost:3001/persons/${id}`
    const person = persons.find(p => p.id === id)
  
    if (window.confirm(`Do you really want to delete ${person.name}?`)) {
    personService
    .deleteContact(id)
    .then(
      setPersons(persons.filter(p => p.id !== id))
    )
    .catch(error => {
      setErrorMessage(
        `${person.name} was already removed from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
    setSuccessMessage(
      `Number of ${person.name} was deleted`
    )
    setTimeout(() => {
      setSuccessMessage(null)
    }, 3000)
    }
  }

  const ErrorNotification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='error'>
        {message}
      </div>
    )
  }

  const SuccessNotification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='success'>
        {message}
      </div>
    )
  }

return (
  <div>
    <h1>Phonebook</h1>
    {!errorMessage ? null : <ErrorNotification message={errorMessage} />}
    {!successMessage ? null : <SuccessNotification message={successMessage} />}
    <Filter filterName={filterName} handleFilter={handleFilter} />
    <PersonForm addPerson={addPerson} newName={newName} handleNameAddition={handleNameAddition} newNumber={newNumber} handleNumberAddition={handleNumberAddition} />
    <div> 
      <h2>Numbers</h2>
       <ul>{filterName.length > 1 ? persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase())).map(person => 
            <Person key={person.id} person={person} />) : persons.map(person => 
              <Person key={person.id} person={person} deletePerson={() => deletionOf(person.id)}
                />)
              }
      </ul> 
    </div>
  </div>
)
}

export default App