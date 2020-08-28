import { useReducer, useEffect, useCallback } from "react";
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
        status: "IDLE",
        actions: [...state.actions, action.type],
        errors: [...state.errors, { type: action.type, value: action.payload }], // append any new errors categoriezed
      };
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

/**
 * Hook to be used in conjunction with React.createContext/React.useContext 
 * to handle all interactions with the server as they all require access 
 * to the currently authenticated user token 
 */
export const useAuthentication = () => {
  const [state, dispatch] = useReducer(authenticationReducer, initialState);
  const [observers, setObservers] = useState([]);

  /** effect to be executed anytime state changes  */
  useEffect(() => {
    if (state.actions.length === 0) {
      const restore_state = JSON.parse(localStorage.getItem("sorted"));
      if (restore_state)
        dispatch({
          type: "RESET",
          payload: { ...restore_state, errors: [] },
        });
      else dispatch({ type: "RESET", initialState });
    } else localStorage.setItem("sorted", JSON.stringify(state));

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
        if (res.status === 401) throw new Error();
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
   * should update all observers when state changes 
   * or an observer is added or removed 
   */
  useCallback(() => {
    function notifyObservers() {
      observers.forEach((obj) => {
        obj.update(state);
      });
    }
    notifyObservers()
  }, [state, observers]);

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
    // console.log(state)
    if (!state.token) throw new Error("No token available");
    else {
      dispatch({ type: "CREATE_ADDRESS" });
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
          dispatch({ type: "ADDRESS_CREATED", payload: data });
          return data;
        })
        .catch((err) => dispatch({ type: "ADDRESS_ERROR", payload: err }));
    }
  }

  /**
   * Function to delete the address supplied at the time of the function 
   * invokation 
   * @param {number} id 
   */
  function deleteAddress(id) {
    if (!state.token) throw new Error("No token available");
    else {
      return fetcher(state.token, `${baseUrl}/address`, "DELETE", {
        id,
      }).then((res) => res.json);
    }
  }

  /**
   * Function to retrieve all the addresses pertaining to the current user
   */
  function getAddresses() {
    if (!state.token) throw new Error("No token available");
    else {
      return fetcher(state.token, `${baseUrl}/address`, "GET").then((res) =>
        res.json()
      );
    }
  }

  /**
   * Creates a location in which items can be placed
   * @param {string} name user-defined name of locatoin
   * @param {string} type "apartment" | "condo" | "storage room" | "etc"
   * @param {number} address_id foriegn key to the associated address
   * @returns {object} fetch response object from call to API 
   */
  function createLocation(name, type, address_id) {
    if (!state.token) throw new Error("No token available");
    else {
      return fetcher(state.token, `${baseUrl}/locations`, "POST", {
        name,
        type,
        address_id,
      })
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
    }
  }

  /**
   * Function to get the locations created by the
   * currently authenticated user
   * @returns {Array<Object>} location objects retrieved from database 
   */
  function getLocations() {
    if (!state.token) throw new Error("No token available");
    else {
      return fetcher(state.token, `${baseUrl}/locations`, "GET").then((res) =>
        res.json()
      );
    }
  }

  /**
   * Function to send DELETE request to API on behalf 
   * of the currently authenticated user 
   * @param {number} id id of the location to be deleted 
   * @returns {object} fetch request response object 
   */
  function deleteLocation(id) {
    if (!state.token) throw new Error("No token available");
    else {
      return fetcher(state.token, `${baseUrl}/locations`, "DELETE", {
        id,
      }).then((res) => res.json);
    }
  }

  /**
   * Function to get all the vendors created by the
   * current user
   * @returns {object} data in JSON format 
   */
  function getVendors() {
    if (!state.token) throw new Error("No token available");
    else {
      return fetcher(state.token, `${baseUrl}/vendors`, "GET")
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
    }
  }

  /**
   * Function to create a new vendor (for currently authenticated user)
   * @param {string} name
   * @param {string} phone
   * @param {string} email
   * @param {string} notes
   * @returns {object} fetch response object 
   */
  function createVendor(name, phone, email, notes) {
    if (!state.token) throw new Error("No token available");
    else {
      return fetcher(state.token, `${baseUrl}/vendors`, "POST", {
        name,
        phone,
        email,
        notes,
      }).then((res) => res.json());
    }
  }

  /**
   * Sends delete request to the API using fetch API 
   * @param {number} id unique identifier of the vendor to be deleted 
   * @returns {object} fetch response object 
   */
  function deleteVendor(id) {
    if (!state.token) throw new Error("No token available");
    else {
      return fetcher(state.token, `${baseUrl}/vendors`, "DELETE", { id }).then(
        (res) => res.json
      );
    }
  }

  /**
   * Creates a new item for the currently logged in user
   * @param {string} name the user-defined name of the item 
   * @param {number} est_value the estimated value of the item 
   * @param {number} acc_value the actual value of the item 
   * @param {string} category the category pertaining to the new item
   * @param {string} make the make or manufacturer of the item 
   * @param {string} model the model name or number 
   * @param {date} purchase_date the date the item was purchased 
   * @param {boolean} selling boolean indicator to determine if that object is for sale 
   * @param {number} location_id unique identifier associated with the location of the item 
   * @param {string} notes notes about the item to be created 
   * @param {string} serial_number serial number of new item 
   * @returns {object} fetch response object
   */
  function createItem(
    name,
    serial_number,
    notes,
    est_value,
    acc_value,
    category,
    make,
    model,
    purchase_date,
    selling,
    location_id
  ) {
    if (!state.token) throw new Error("No token available");
    else {
      return fetcher(state.token, `${baseUrl}/items`, "POST", {
        name,
        serial_number,
        notes,
        est_value,
        acc_value,
        category,
        make,
        model,
        purchase_date,
        selling,
        location_id,
      }).then((res) => res.json());
    }
  }

  /**
   * Makes fetch GET request to API to retrieve items 
   * @returns {Array<Object>} array of items related to the currently autenticated user 
   */
  function getItems() {
    if (!state.token) throw new Error("No token available");
    else {
      return fetcher(state.token, `${baseUrl}/items`, "GET").then((res) =>
        res.json()
      );
    }
  }

  /**
   * Makes fetch DELETE request to API to delete the item 
   * associated with the supplied ID 
   * @param {number} id unique identifier of the object to be deleted
   * @returns {Object} fetch request response object 
   */
  function deleteItem(id) {
    if (!state.token) throw new Error("No token available");
    else {
      return fetcher(state.token, `${baseUrl}/items`, "DELETE", { id }).then(
        (res) => res.json()
      );
    }
  }

  /**
   * Actions to be executed throughout application that will require 
   * authentication for execution 
   */
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
      getAll: getAddresses,
      delete: deleteAddress,
    },
    locations: {
      create: createLocation,
      getAll: getLocations,
      delete: deleteLocation,
    },
    vendors: {
      create: createVendor,
      getAll: getVendors,
      delete: deleteVendor,
    },
    items: {
      create: createItem,
      getAll: getItems,
      delete: deleteItem,
    },
  };

  return [state, actions];
};
