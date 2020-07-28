import useLocalStorage from './useLocalStorage'
import { get, post } from '../helpers/apiHelpers'

const undefinedUser = {
  first: null,
  last: null,
  email: null,
  bio: null,
  username: null,
  password: null,
};


export const useAuth = (baseUrl = "http://localhost:4000") => {
  const [user, setUser] = useLocalStorage('user', undefinedUser)
  const [token, setToken] = useLocalStorage('token', null)

  const Login = ({ username, password }) => {
    if (user == undefinedUser) {
      const response = await post(baseUrl, '/token', { username, password })
      const data = await response.json() 

      if (response.status == 200) {
        // todo: save token 
        console.log(data)
      } else {
        console.error(data) 
      }
    } else {
      console.error('User already logged in') 
    }
  }
  const Logout = () => {
    setUser(undefinedUser) 
    setToken(null)
  } 

  return [user, token, Login, Logout]
}