import React from 'react'

const Person = ({ person, deletePerson }) => {
  const label = 'Delete'

  return (
    <li className='person'>
      {person.key}
      {person.name} <br />
      {person.number}
    <button onClick={deletePerson}>{label}</button>
    </li>
  )
}

export default Person