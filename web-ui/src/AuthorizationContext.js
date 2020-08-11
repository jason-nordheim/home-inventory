import { createContext } from 'react'
import { ACTIONS } from './hooks/useAuthentication'

const AuthorizationContext = createContext();

const Actions = {
    Register: (name, username, password, email, phone) => {
        return { type: ACTIONS.Register, payload: JSON.stringify({name, username, password, email, phone})}
    }
}


export { Actions, ACTIONS, AuthorizationContext } 