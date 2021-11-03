import React from 'react'

const PersonForm = ({ addPerson, newName, handleNameAddition, newNumber, handleNumberAddition }) => {
  return (
    <div>
      <form onSubmit={addPerson}>
      <h2>Add New Number</h2>
        <div>Name:
        <input
          value={newName}
          onChange={handleNameAddition}
        />
        </div>
        <div>Number:
        <input
          value={newNumber}
          onChange={handleNumberAddition}
        />
        </div>
        <button type="submit">Add</button>
      </form>  
      </div>
  )
}

export default PersonForm