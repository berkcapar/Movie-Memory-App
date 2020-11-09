export const getUserNameFromState = (state) => state.loggedUser.data.name

export const getLoggedInfoFromState = (state) => state.loggedUser.isLoggedIn
