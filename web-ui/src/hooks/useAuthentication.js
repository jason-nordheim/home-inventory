import { useReducer } from 'react' 
import Axios from 'axios'


const baseUrl = "http://localhost:3000"

const defaultState = {
    token: null, 
    error: null, 
}

export const ACTIONS = {
    Logout: "logout", 
    Login: "login", 
    Register: "Register"
}

const authenticationReducer = (state, action) => {
    const payload = JSON.parse(action.payload)
    switch (action.type) {
        case ACTIONS.login:
            Axios.post(baseUrl + "/login", payload)
                .then(res => {
                    return {
                        ...state, 
                        token: res.data.token 
                    }
                })
                .catch(err => {
                    return {
                        ...state, 
                        error: err.message
                    }
                })
            break; 
        case ACTIONS.logout: 
            return {
                ...state,
                token: null, 
                error: null, 
            }
        case ACTIONS.register: 
            Axios.post("/users", payload)
                .then(res => {
                    console.log(res)
                    return {
                        ...state, 
                        
                    }
                })
                .catch(err => {
                    return {
                        ...state, 
                        error: err.message
                    }
                })
            break; 
        default:
            return {
                ...state, 
            }
    }
}



const useAuthentication = (initialState=defaultState) => {
    const [state, dispatch] = useReducer(authenticationReducer, initialState)
    return [state, dispatch, ACTIONS]
}

export default useAuthentication