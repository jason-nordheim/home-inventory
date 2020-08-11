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
