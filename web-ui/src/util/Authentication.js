const baseUrl = "http://localhost:3000";

/**
 * Class to encapsulate the return value of a
 * an API call
 */
class ActionResult {
  constructor(success = true, data) {
    this.success = success;
    this.data = data;
  }
}

/**
 * Attemts to login against the API, and returns an action result
 * indicating the success or failure of the transaction
 * @param {string} username
 * @param {string} password
 */
export const login = async (username, password) => {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    if (response.status !== 201) {
      return new ActionResult(false, data);
    } else {
      return new ActionResult(true, data);
    }
  } catch (err) {
    return new ActionResult(false, err);
  }
};

/**
 * Attempts to register a new user with the API,
 * and returns an ActionResult containing both the data
 * and the success/failure of the request
 * @param {string} name
 * @param {string} username
 * @param {string} email
 * @param {string} phone
 * @param {string} password
 */
export const register = async (name, username, email, phone, password) => {
  try {
    const response = await fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, username, email, phone, password }),
    });
    const data = await response.json();

    if (response.status !== 201) {
      return new ActionResult(false, data);
    } else {
      return new ActionResult(true, data);
    }
  } catch (err) {
    return new ActionResult(false, err);
  }
};

export const getUserInfo = async (token) => {
  const response = await fetch(`${baseUrl}/my_info`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
};

/**
 * Attempts to create a new location for the user associated with the 
 * provided bearer token 
 * @param {string} token 
 * @param {string} name 
 * @param {string} street1 
 * @param {string} street2 
 * @param {string} city 
 * @param {string} state 
 * @param {string} zip 
 * @returns {ActionResult}  
 */
export const postNewLocation = async (token, name, street1, street2, city, state, zip ) => {
  try {
    const response = await fetch(`${baseUrl}/locations`, {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }, 
      body: JSON.stringify(data) 
    })
    const data = await response.json() 

    if (response.status !== 201) {
      return new ActionResult(false, data);
    } else {
      return new ActionResult(true, data);
    }
  } catch (err) {
    return new ActionResult(false, err);
  }
}

export const updateLocation = async () => {
  throw new Error('Not Implemented')
}

