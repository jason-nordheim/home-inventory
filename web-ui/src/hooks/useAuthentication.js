import { useReducer } from 'react';
import Axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const defaultState = {
	token : null,
	error : null
};

export const ACTIONS = {
	Logout   : 'logout',
	Login    : 'login',
	Register : 'Register'
};

const authenticationReducer = async (state, action) => {
	switch (action.type) {	
		case ACTIONS.login:
			return {
				...state, 
			}
			break;
		case ACTIONS.logout:
			return {
				...state,
				token : null,
				error : null
			};
		case ACTIONS.register:
			await Axios.post('/users', action.payload)
				.then((res) => {
					console.log(res);
					return {
						...state
					};
				})
				.catch((err) => {
					return {
						...state,
						error : err.message
					};
				});
			break;
		default:
			return {
				...state
			};
	}
};

const useAuthentication = (initialState = defaultState) => {
	const [ state, dispatch ] = useReducer(authenticationReducer, initialState);
	return [ state, dispatch ];
};

export default useAuthentication;
