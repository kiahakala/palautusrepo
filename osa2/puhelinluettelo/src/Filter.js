import React from 'react'

const Filter = ({filterName, handleFilter}) => {
  return (
      <div>Filter Names:
      <input
          value={filterName}
          onChange={handleFilter}
        />
      </div>
  )
}

export default Filter