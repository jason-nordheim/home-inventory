import { useState } from 'react'

const createUser = ({ first, last, email, bio, username, password }) => {};
const getUserToken = ({ username, password }) => {};



export const useAPI = (baseUrl = "http://localhost:4000") => {
  const [isLoading, setIsLoading] = useState(false) 
  const [isLoggedIn, setIsLoggedIn] = useState(false) 

  const getItems = () => {}
  const getLocations = () => {}
  const getVendors = () => {} 



  return [isLoading] 
}