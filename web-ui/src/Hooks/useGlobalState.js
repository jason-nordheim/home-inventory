import useLocalStorage from "./useLocalStorage";
import { get, post } from "../helpers/apiHelpers";


const undefinedUser = {
  first: null,
  last: null,
  email: null,
  bio: null,
  username: null,
  password: null,
  password_digest: null 
};

export const useGlobalState = (baseUrl = "http://localhost:4000") => {
    const [user, setUser] = useLocalStorage("user", undefinedUser);
    const [token, setToken] = useLocalStorage("token", null);

    const userState = {
      isLoggedIn: user !== undefinedUser && user !== null,
      token: token, 
      user: user 
    };

    const userActions = {
      setFirst: (firstName) => setUser({ ...user, first: firstName }), 
      setLast: (lastName) => setUser({...user, last: lastName}), 
      setUsername: (username) => setUser({...user, username}), 
      setEmail: (email) => setUser({...user, email}), 
      setPassword: (password) => setUser({...user, password}), 
      setBio: (bio) => setUser({...user, bio}), 
      register: async (first = user.first, last=user.last, email=user.email, username=user.username, password=user.password, bio=user.bio) => {
        payload = { first, last, email, username, password, bio } 
        const response = await post(baseUrl, "/users", payload) 
        const data = await response.json() 
        console.log("data", data) 
      }, 
      login: async (username, password) => {
        payload = { username, password } 
        const response = await post(baseUrl, "/users", payload) 
        const data = await response.json() 
        console.log("data", data) 
      }, 
      logout: () => { 
        setUser(undefinedUser); 
        setToken(null) 
      }, 
    }
    
    return [ userState, userActions ]
}