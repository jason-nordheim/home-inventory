import { useReducer, useEffect } from "react";
import { fetcher, baseUrl } from "./apiHelpers";
import { useState } from "react";

/**
 * Authenticatoin Reducer
 * @param {object} state the current state
 * @param {object} action the action dispatched to the reducer
 * (should have a `type` and `payload` property)
 */
const authenticationReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_ADDRESS":
      return {
        ...state,
        status: "LOADING",
        actions: [...state.actions, action.type],
      };
    case "ADDRESS_ERROR": 
      return {
        ...state, 
        status: 'IDLE', 
        actions: [...state.actions, action.type], 
        errors: [...state.errors, { type: action.type, value: action.payload }], // append any new errors categoriezed
      }
    case "ADDRESS_CREATED":
      return {
        ...state,
        status: "IDLE",
        actions: [...state.actions, action.type],
      };
    case "RESET":
      return { ...action.payload, actions: [action.type], status: "IDLE" };
    case "LOGIN":
      return {
        ...state,
        actions: [...state.actions, action.type],
        status: "LOADING",
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        actions: [...state.actions, action.type],
        status: "IDLE",
        token: action.payload,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        status: "ERROR_OCCURED",
        actions: [...state.actions, String(action.type)],
        errors: [...state.errors, { type: action.type, value: action.payload }], // append any new errors categoriezed
      };
    case "LOGOUT":
      return {
        ...state,
        actions: [...state.actions, action.type],
        status: "IDLE",
        token: null,
      };
    case "REGISTER":
      return {
        ...state,
        actions: [...state.actions, action.type],
        status: "LOADING",
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        actions: [...state.actions, action.type],
        status: "IDLE",
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        status: "ERROR_OCCURED",
        actions: [...state.actions, action.type],
        errors: [...state.errors, { type: action.type, value: action.payload }],
      };
    default:
      return state;
  }
};

/**
 * initial state for the reducer function
 */
export const initialState = {
  status: "IDLE",
  errors: [],
  actions: [],
  token: null,
};

export const useAuthentication = () => {
  const [state, dispatch] = useReducer(authenticationReducer, initialState);
  const [observers, setObservers] = useState([]);

  useEffect(() => {
    console.log(`state updated`, state);
    if (state.actions.length === 0) {
      const restore_state = JSON.parse(localStorage.getItem("sorted"));
      if (restore_state) {
        dispatch({
          type: "RESET",
          payload: { ...restore_state, errors: [] },
        });
      } else {
        dispatch({ type: "RESET", initialState });
      }
    } else {
      localStorage.setItem("sorted", JSON.stringify(state));
    }
    notifyObservers();
  }, [state]);

  /**
   * Logs the user into the system and saves their token
   * @param {string} username
   * @param {string} password
   */
  function Login(username, password) {
    //console.log('loggin in existing user', {username, password})
    dispatch({ type: "LOGIN" });
    return fetcher(null, `${baseUrl}/login`, "POST", { username, password })
      .then((res) => {
        if (res.status == 401) throw new Error();
        else return res.json();
      })
      .then((data) => {
        //console.log('success', data)
        dispatch({ type: "LOGIN_SUCCESS", payload: data.token });
      })
      .catch((error) => {
        dispatch({
          type: "LOGIN_ERROR",
          payload: "Invalid Username or Password",
        });
      });
  }
  /**
   * Logs the user out
   */
  function Logout() {
    return dispatch({ type: "LOGOUT" });
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
    return fetcher(null, `${baseUrl}/users`, "POST", {
      name,
      username,
      password,
      email,
      phone,
    })
      .then((res) => res.json())
      .then((_) => dispatch({ type: "REGISTER_SUCCESS" }))
      .catch((error) =>
        dispatch({ type: "REGISTER_FAILURE", payload: error.messsage })
      );
  }

  /**
   * Function to get the currently logged in user information
   */
  function MyInfo() {
    if (!state.token) throw new Error("No token available");
    else {
      return fetcher(state.token, `${baseUrl}/login`, "GET", null)
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
    }
  }

  /**
   * Function to add an obsever to be notified whenever
   * state changes
   * @param {object} obj needs to have 'update(state)' method or
   * this will not work properly
   */
  function addObserver(obj) {
    setObservers([...observers, obj]);
  }

  /**
   * function to notify any observers
   */
  function notifyObservers() {
    observers.forEach((obj) => {
      obj.update(state);
    });
  }

  /**
   * Creates an address for the current user
   * @param {string} name
   * @param {string} street1
   * @param {string} street2
   * @param {string} city
   * @param {string} state
   * @param {string} zip
   */
  function createAddress(name, street1, street2, city, _state, zip) {
    console.log(state)
    if (!state.token) throw new Error("No token available");
    else {
      dispatch({ type: "CREATE_ADDRESS"})
      return fetcher(state.token, `${baseUrl}/address`, "POST", {
        name,
        street1,
        street2,
        city,
        state: _state,
        zip,
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: 'ADDRESS_CREATED', payload: data})
          return data 
        })
        .catch((err) => dispatch({ type: "ADDRESS_ERROR", payload: err}));
    }
  }

  function getAddresses(){ 
    if (!state.token) throw new Error("No token available");
    else {
      return fetcher(state.token, `${baseUrl}/address`, 'GET')
        .then(res => res.json())
        .then(data => {
          return data 
        })
    }
  }

  const actions = {
    users: {
      Register,
      Login,
      Logout,
      MyInfo,
    },
    observers: {
      addObserver,
    },
    addresses: {
      create: createAddress,
      getAll: getAddresses
    },
  };

  return [state, actions];
};
