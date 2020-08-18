import { useEffectReducer } from 'use-effect-reducer';
import { fetcher, baseUrl } from './apiHelpers';
/**
 * API Reducer
 * @param {object} state the current state
 * @param {event} event the event dispatched from the reducer
 * @param {*} exec a function that captures the events to be executed
 * and returns an "effect-entity" that allows you to control the effect
 */
const useLoginEffectReducer = (state, event, exec) => {
    switch (event.type) {
        case 'FETCH': 
            exec(() => {
                fetcher(null,`${baseUrl}/login`, 'POST', event.payload)
                    .then(res => res.json())
                    .then(data => )
            })
            return {...state}
        case 'SUCCESS': 
            return {...state}
        case 'FAILURE': 
            return {...state}
        default:
            return state;
    }
};
/**
 * initial state for the reducer function
 */
const initialState = {
    status: 'IDLE',
    errors: [],
};
export default useEffectReducer(registerEffectReducer, initialState);
