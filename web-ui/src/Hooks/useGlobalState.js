import useLocalStorage from "./useLocalStorage";
import { post } from "../helpers/apiHelpers";

const undefinedUser = {
  first: null,
  last: null,
  email: null,
  bio: null,
  username: null,
  password: null,
  password_digest: null,
};

export const useGlobalState = (baseUrl = "http://localhost:4000") => {
  const [user, setUser] = useLocalStorage("user", undefinedUser);
  const [token, setToken] = useLocalStorage("token", null);

  const userState = {
    isLoggedIn: token !== null, 
    token: token,
    user: user,
  };

  const userActions = {
    setFirst: async (firstName) => await setUser({ ...user, first: firstName }),
    setLast: async (lastName) => await setUser({ ...user, last: lastName }),
    setUsername: async (username) => await setUser({ ...user, username }),
    setEmail: async (email) => await setUser({ ...user, email }),
    setPassword: async (password) => await setUser({ ...user, password }),
    setPasswordDigest: async (password_digest) => await setUser({...user, password_digest}), 
    setBio: async (bio) => await setUser({ ...user, bio }),
    register: async () => {
      const response = await post(baseUrl, "/users", user);
      const data = await response.json();
      if (data[0]?.password_digest == null) {
        alert(data.err) 
      } else {
        await userActions.setPassword('')
        alert("Account Created Successfully")
      }
    },
    login: async () => {
      const payload = { user: user.username, password: user.password }
      const response = await post(baseUrl, "/token", payload);
      const data = await response.json();
      if (data.token) {
        await userActions.setPassword('')
        await setToken(data.token);
      }
    },
    logout: () => {
      setUser(undefinedUser);
      setToken(null);
    },
  };

  return [userState, userActions];
};
