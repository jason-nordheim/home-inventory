import { useReducer } from "react";
import { useEffect } from 'react'
import { register, login } from '../util/Authentication'

export const defaultState = {
  isLoading: false,
  isLoggedIn: false,
  token: null,
  error: null,
};

const authenticationReducer = async (state, action) => {
  switch (action.type) {
		case 'reset': 
			return action.payload
    case 'login':

      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case 'success':
      return {
        ...state,
        isLoading: false,
				isLoggedIn: true,
				token: action.payload
			};
		case 'error': 
			return {
				...state, 
				isLoading: false, 
				isLoggedIn: false, 
				error: action.payload
			}
    case 'logout':
      return {
        ...state,
        token: null,
        error: null,
        isLoading: false,
        isLoggedIn: false,
      };
    case 'register':
      return {
        ...state,
      };
    default:
      return state 
  }
};

const useAuthentication = (initialState = defaultState) => {
	const [state, dispatch] = useReducer(authenticationReducer, initialState);

	// pull state from local storage on load 
	useEffect(() => {
		const rawData = localStorage.getItem('data')
		dispatch({ type: 'reset', payload: JSON.parse(rawData)})
	}, [])

	// save state to local storage, whenever it changes 
	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(state))
	}, [state])
	

  return [state, dispatch];
};

export default useAuthentication;
