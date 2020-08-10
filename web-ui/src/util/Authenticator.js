const axios = require('axios').default;

/**
 * Class to handle end-user authentication 
 */
class Authenticator {
	constructor(baseUrl = 'http://localhost:3000') {
		this.baseUrl = baseUrl;
		this.token = null;
		this.isLoggedIn = !!this.token;
	}

	/**
	 * Register's new user and returns ActionResult 
	 * @param {string} username 
	 * @param {string} password 
	 * @param {string} email 
	 * @param {string} phone 
	 * @returns {ActionResult}
	 */
	async register(username, password, email, phone ) {
		const data = { username, password, email, phone }
		const res = await axios.post(this.baseUrl + '/users', data);
	
        console.log('axios', res);
        return res;
	}

	/**
	 * Attempts to login a new user, 
	 * returns ActionResult 
	 * @param {string} username 
	 * @param {string} password 
	 * @returns {ActionResult} result 
	 */
	async login(username, password ) {
		const data = { username, password}
		try {
			const res = await axios.post(this.baseUrl + '/login', data);
			if (res.status === 201) { // created 
				this.token = res.data.token
				console.log('token stored', this.token)
			} else {
				console.error('error 1', res.data)
			}
			return new ActionResult(res.data);
		} catch (error) {
			console.error('error 2', error.message)
			return new ActionResult(false , error)
		}
	}

	logout() {
		this.isLoggedIn = false;
		this.user = null;
	}
}


class ActionResult{
	constructor(success=true, data){
		this.success =success
		this.data = data 
	}
}

/** Singleton Pattern  */
const MyAuthenticator = new Authenticator();
export default MyAuthenticator;
