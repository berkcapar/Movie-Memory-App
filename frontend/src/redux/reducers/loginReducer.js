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


export const logout = () => {
    return async dispatch => { 
    localStorage.removeItem(("loggedUser"))
    dispatch({
        type: 'USER_LOGGED_OUT'
    })}
    
}

const initialState = {
    data: '',
    isLoggedIn: false
}


const loginReducer = (state = initialState,  action) => {
    switch (action.type) {
        case 'USER_LOGGED_IN':
            return {
                data: action.data,
                isLoggedIn:true
            }
        case 'USER_LOGGED_OUT':
            return state                
        default:
           return state
    }
}

export default loginReducer