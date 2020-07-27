import { useState, useEffect } from 'react'

function getSavedValue(key, initialValue){
  const savedValue = JSON.parse(localStorage.getItem(key))
  if (savedValue) return savedValue
  if (initialValue instanceof Function) return initialValue()
  return initialValue
}

const useLocalStorage = (key, initalValue = '') => {
  const [value, setValue] = useState(() => getSavedValue(key, initalValue))

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  },[key, value])

  return [value, setValue]
}

export default useLocalStorage 