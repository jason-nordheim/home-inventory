import { useReducer } from "react";
import { useEffect } from 'react'

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
	// useEffect(() => {
  //   if (state === defaultState) {
  //     console.log('reseting')
  //     const rawData = localStorage.getItem('data')
  //     dispatch({ type: 'reset', payload: JSON.parse(rawData)})
  //   }
	// }, [])

	// save state to local storage, whenever it changes 
	useEffect(() => {
    const saveState = async () => console.log('authStateChanged', await state)
    saveState()
	}, [state])
	

  return [state, dispatch];
};

export default useAuthentication;
