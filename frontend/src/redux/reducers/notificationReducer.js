const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'NOTIFICATION':
      return action.message
    default:
      return state
  }
}

export const showNotification = (message, second = 5) => {
  return dispatch => {
    dispatch({
      type: 'NOTIFICATION',
      message
    })
    
    setTimeout(() => {
      dispatch({
        type: 'NOTIFICATION',
        message: null
      })
    }, second * 1000)
  }
}

export default notificationReducer