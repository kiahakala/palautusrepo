let timeoutId = null

const wait = ms => new Promise(resolve => timeoutId = setTimeout(resolve, ms*1000))

const reducer = (state = null, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.data
      default:
        return state
    }
  }
  
  export const showNotification = (content, ms) => {
    return async dispatch => {
        clearTimeout(timeoutId)
        dispatch({
            type: 'SET_NOTIFICATION',
            data: content
        })
        await wait(ms)
        dispatch({
            type: 'SET_NOTIFICATION',
            data: null
        })
    }
  }
  
  export default reducer