import { useReducer } from "react";
import { useEffect } from "react";
import { getUserInfo } from '../util/API'

export const defaultState = {
  isLoading: false,
  isLoggedIn: false,
  token: null,
  error: null,
};

const authenticationReducer = (state, action) => {
  console.log('action', action)
  switch (action.type) {
    case "user": 
      return {
        ...state, 
        user: action.payload 
      }
    case "reset":
      return action.payload;
    case "login":
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case "success":
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        token: action.payload,
      };
    case "error":
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        token: null,
        error: action.payload,
      };
    case "logout":
      return {
        ...state,
        token: null,
        error: null,
        user: null, 
        isLoading: false,
        isLoggedIn: false,
      };
    case "register":
      return {
        ...state,
      };
    default:
      return state;
  }
};

const saveState = (state) => {
  localStorage.setItem("sorted", JSON.stringify(state));
};



const useAuthentication = (initialState = defaultState) => {
  const [state, dispatch] = useReducer(authenticationReducer, initialState);

  useEffect(() => {
    const rawData = localStorage.getItem("sorted");
    const payload = JSON.parse(rawData);
    if(payload) dispatch({ type: "reset", payload });
  }, []);

  useEffect(() => {
    if (state.token && state.user == null) {
      getUserInfo(state.token).then(user => dispatch({ type: 'user', payload: user}))
    }
    saveState(state)
  }, [state]);



  return { state, dispatch };
};

export default useAuthentication;
