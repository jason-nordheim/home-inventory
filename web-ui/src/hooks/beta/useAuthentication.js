import { useReducer } from 'react';
import { fetcher, baseUrl } from './apiHelpers';

/**
 * Authenticatoin Reducer 
 * @param {object} state the current state 
 * @param {object} action the action dispatched to the reducer 
 * (should have a `type` and `payload` property)
 */
const authenticationReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { ...state, status: 'LOADING' };
		case 'LOGIN_SUCCESS':
			return { ...state, status: 'IDLE', token: action.payload };
		case 'LOGIN_ERROR':
			return {
				...state,
				status : 'ERROR_OCCURED',
				error  : [ ...state.error, { type: 'LOGIN_ERROR', value: action.payload } ] // append any new errors categoriezed
			};
		case 'LOGOUT':
			return { ...state, status: 'IDLE', token: null };
		case 'REGISTER':
			return { ...state, status: 'LOADING' };
		case 'REGISTER_SUCCESS':
			return { ...state, status: 'IDLE' };
		case 'REGISTER_FAILURE':
			return {
				...state,
				status : 'ERROR_OCCURED',
				error  : [ ...state.error, { type: 'REGISTER_ERROR', value: action.payload } ]
			};
		default:
			return state;
	}
};

/**
 * initial state for the reducer function 
 */
export const initialState = {
	status : 'IDLE',
	error  : [],
	token  : null
};

export const useAuthentication = () => {
	const [ state, dispatch ] = useReducer(authenticationReducer, initialState);

	/**
     * Logs the user into the system and saves their token 
     * @param {string} username 
     * @param {string} password 
     */
	function Login(username, password) {
        console.log('loggin in existing user', {username, password})
		if (state.status !== 'IDLE') throw new Error('Operation already in progress');
		else {
			dispatch({ type: 'LOGIN' });
			fetcher(null, `${baseUrl}/login`, 'POST', { username, password })
				.then((res) => res.json())
				.then((data) => dispatch({ type: 'LOGIN_SUCCESS', payload: data.token }))
				.catch((error) => dispatch({ type: 'LOGIN_FAILURE', payload: error.messsage }));
		}
	}
	/**
     * Logs the user out 
     */
	function Logout() {
		if (state.status !== 'IDLE') throw new Error('Operation already in progress');
		else {
			dispatch({ type: 'LOGOUT' });
		}
	}
	/**
     * Registers a new user 
     * @param {string} name 
     * @param {string} username 
     * @param {string} password 
     * @param {string} email 
     * @param {string} phone 
     */
	function Register(name, username, password, email, phone) {
		console.log('registering new user: ', { name, username, password, email, phone });
		if (state.status !== 'IDLE') throw new Error('Operation already in progress');
		else {
			fetcher(null, `${baseUrl}/users`, 'POST', { name, username, password, email, phone })
				.then((res) => res.json())
				.then((_) => dispatch({ type: 'REGISTER_SUCCESS' }))
				.catch((error) => dispatch({ type: 'REGISTER_FAILURE', payload: error.messsage }));
		}
		Login(username, password) 
	}

	/**
	 * Function to get the currently logged in user information 
	 */
	function MyInfo() {
		console.log('retrieving user info...')
		if (state.status !== 'IDLE') throw new Error('Operation already in progress')
		else if (!state.token) throw new Error('No token available')
		else {
			return fetcher(state.token, `${baseUrl}/login`, 'GET', null)
				.then(res => res.json())
				.then(data => {
					return data 
				})
		}
	}

	const actions = {
		Register,
		Login,
		Logout, 
		MyInfo
	};

	return [ state, actions ];
};
