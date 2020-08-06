const axios = require('axios').default;

class Authenticator {
    constructor(baseUrl="http://localhost:3000"){
        this.baseUrl = baseUrl 
        this.isLoggedIn = false; 
        this.user = null; 
    }

    async register({ username, password, email, phone }) {
        try {
            const res =  await axios.post(this.baseUrl + "/users", {username, password , email, phone })
            console.log(res)
            return res
        } catch (error) {
            console.error("Unable to Register")
            return error
        }
    }

    async login({username, password}){
        try {
            const res = await axios.post(this.baseUrl + "/login", { username, password })
            console.log(res)
            return res 
        } catch (error) {
            console.error("Unable to login")
            return error
        }
    }

    logout() {
        this.isLoggedIn = false; 
        this.user = null; 
    }
}

/** Singleton Pattern  */
const MyAuthenticator = new Authenticator() 
export default MyAuthenticator