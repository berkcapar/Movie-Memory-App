import loginService from '../../services/login'


export const login = (email,password) => {
    return async dispatch => {
        const loggedUser = await loginService.login(email,password)
        dispatch({
            type: 'USER_LOGGED_IN',
            data: loggedUser
        }) 
    }
}


const loginReducer = (state = '', action) => {
    switch (action.type) {
        case 'USER_LOGGED_IN':
            return action.data            
        default:
           return state
    }
}

export default loginReducer