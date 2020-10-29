import signupService from '../../services/signup'


const signupReducer = (state = [], action ) => {

switch (action.type) {
    case 'SIGN_UP':
        return [...state, action.data]
    default:
       return state
}
}

export const createUser = (name,email,password) => {
    return async dispatch => {
        const newUser = await signupService.signup(name,email,password) 
        dispatch({
            type: 'SIGN_UP',
            data: newUser
        })
    }
}

export default signupReducer