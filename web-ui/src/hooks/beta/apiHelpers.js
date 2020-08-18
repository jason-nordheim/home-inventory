
/**
 * Base URL of the API 
 */
export const baseUrl = `http://localhost:4000`;

/**
 * Helper method to create requests 
 * @param {string} token bearer token 
 * @param {string} url 
 * @param {string} method 'GET', 'POST', 'PATCH', etc. 
 * @param {object} payload json data to be attached to the body of the request 
 */
export const fetcher = async (token = null, url, method = 'GET', payload = null) => { 
	const options = {
		method  : method,
		headers : {
			'Content-Type' : 'application/json'
		}
	};
	/* add the body if we have one */
	if (payload) options.body = JSON.stringify(payload);
	/* add a token if we have one */
	if (token) options.headers.authorization = `bearer ${token}`;

	return await fetch(url, options);
};

