import React from 'react'
import { connect } from 'react-redux'
import { filterContent } from '../reducers/filterReducer'


const Filter = (props) => {

  const handleChange = (event) => {
      const filter = event.target.value
      props.filterContent(filter)
      }
  
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input name='filter' onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
    filterContent
  }

const ConnectedFilter = connect(() => ({}), mapDispatchToProps)(Filter)
export default ConnectedFilter