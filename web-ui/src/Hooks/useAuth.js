import React from 'react'
import useLocalStorage from './useLocalStorage'

const undefinedUser = {
  first: null,
  last: null,
  email: null,
  bio: null,
  username: null,
  password: null,
};

export const useAuth = () => {
  const [user, setUser] = useLocalStorage('user', undefinedUser)
  const [token, setToken] = useLocalStorage('token', null)

  const Register = ({ first, last, email, bio, username, password }) => {}
  const Login = ({ username, password }) => {}
  const Logout = () => {} 

  return [user, token, Register, Login, Logout]
}