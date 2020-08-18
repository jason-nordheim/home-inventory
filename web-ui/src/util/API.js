const baseUrl = "http://localhost:4000";

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
 * Helper method to create requests 
 * @param {string} token bearer token 
 * @param {string} url 
 * @param {string} method 'GET', 'POST', 'PATCH', etc. 
 * @param {object} payload json data to be attached to the body of the request 
 */
const fetcher = async (token = null, url, method="GET", payload = null) => {
  console.log("token", token);

  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  /* add the body if we have one */
  if (payload) options.body = JSON.stringify(payload);
  /* add a token if we have one */
  if (token) options.headers.authorization = `bearer ${token}`;

  return await fetch(url, options);
};


/**
 * Attemts to login against the API, and returns an action result
 * indicating the success or failure of the transaction
 * @param {string} username
 * @param {string} password
 */
export const login = async (username, password) => {
  try {
    const response = await fetcher(null, `${baseUrl}/login`, 'POST', {username, password})
    const data = await response.json();

    if (response.ok) return new ActionResult(true, data);
    else return new ActionResult(false, data);
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
    const response = await fetcher(null, `${baseUrl}/users`, 'POST', { name, username, email, phone, password }); 
    const data = await response.json();

    if (response.ok) return new ActionResult(true, data);
    else return new ActionResult(false, data);
  } catch (err) {
    return new ActionResult(false, err);
  }
};

/**
 * Function to retrieve the user information for the user
 * associated with the provided bearer token
 * @param {string} token
 */
export const getUserInfo = async (token) => {
  const response = await fetcher(token, `${baseUrl}/login`, "GET", null); 
  const data = await response.json();
  console.log('data', data)
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
export const createLocation = async (
  token,
  name,
  street1,
  street2,
  city,
  state,
  zip,
  type
) => {
  const newLocation = { name, street1, street2, city, state, zip, type };
  console.log("newLocation", newLocation);
  try {
    const response = await fetcher(token, `${baseUrl}/locations`, 'POST')
    const data = await response.json();

    if (response.ok) return new ActionResult(false, data);
    else return new ActionResult(true, data);
  } catch (err) {
    return new ActionResult(false, err);
  }
};

export const getLocations = async (token) => {
  try {
    const response = await fetcher(token, `${baseUrl}/locations`, "POST");
    const data = await response.json();


    if (response.ok) return new ActionResult(false, data);
    else return new ActionResult(true, data);
  } catch (err) {
    return new ActionResult(false, err);
  }
};



export const updateLocation = async () => {
  throw new Error("Not Implemented");
};
