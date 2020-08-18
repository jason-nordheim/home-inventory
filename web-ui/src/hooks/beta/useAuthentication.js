import { useEffectReducer } from 'use-effect-reducer'

/**
 * Authenticatoin Reducer 
 * @param {object} state the current state 
 * @param {event} event the event dispatched from the reducer 
 * @param {*} exec a function that captures the events to be executed 
 * and returns an "effect-entity" that allows you to control the effect 
 */
const authenticationReducer = (state, event, exec) => {
  switch(event.type) {
        case 'login':
            return {...state}
        case 'logout': 
            return {...state}
        case 'register': 
            return {...state}
        default: 
            return state 
  }
}

