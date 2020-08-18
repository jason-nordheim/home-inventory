import { useEffectReducer } from 'use-effect-reducer';
import { fetcher, baseUrl } from './apiHelpers';
/**
 * API Reducer
 * @param {object} state the current state
 * @param {event} event the event dispatched from the reducer
 * @param {function} exec a function that captures the events to be executed
 * and returns an "effect-entity" that allows you to control the effect
 */
const registerEffectReducer = (state, event, exec) => {
	switch (event.type) {
		case 'SUCCESS':
			return { ...state, status: 'SUCCESS', data: event.payload };
		case 'FAILURE':
			return { ...state, status: 'FAILURE', errors: state.errors.push(event.payload)};
		case 'FETCH':
			exec({ type: 'fetchFromApi', payload: event.payload });
			return { ...state, status: 'FETCHING' };
		default:
			return state;
	}
};
/**
 * initial state for the reducer function
 */
const initialState = {
	status   : 'IDLE',
	response : null,
	errors   : []
};

const fetchFromApiEffect = (state, effect, dispatch) => {
	fetcher(null, `${baseUrl}/users`, 'POST', effect.payload)
		.then((res) => res.json())
		.then((data) => dispatch({ type: 'SUCCESS', payload: data }))
		.catch((error) => dispatch({ type: 'FAILURE', payload: error }));
};

export default useEffectReducer(registerEffectReducer, initialState, {
	fetchFromApi : fetchFromApiEffect
});
