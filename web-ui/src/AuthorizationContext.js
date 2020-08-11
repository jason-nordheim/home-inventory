import { createContext } from 'react'
import { ACTIONS, defaultState } from './hooks/useAuthentication'

const AuthorizationContext = createContext(defaultState);

const Actions = {
    Register: (name, username, password, email, phone) => {
        const payload = JSON.stringify({name, username, password, email, phone})
        const registerAction = JSON.stringify({ type: "register", payload })
        return registerAction
    }
}


export { Actions, ACTIONS, AuthorizationContext } 