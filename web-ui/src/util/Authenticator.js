const axios = require('axios').default;

class Authenticator {
    constructor(baseUrl="http://localhost:3000"){
        this.baseUrl = baseUrl 
        this.isLoggedIn = false; 
        this.user = null; 
    }

    async register({ username, password, email, phone }) {
       const res =  await axios.post(this.baseUrl + "/users", {username, password , email, phone })
       return res
    }

    async login({username, password}){

    }
}

const MyAuthenticator = new Authenticator() 
export default MyAuthenticator