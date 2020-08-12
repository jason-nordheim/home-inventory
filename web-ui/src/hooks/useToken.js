
/**
 * Custom hook to get data from API that would require a user token 
 * @param {string} token 
 */
export const useToken = async (token) => {
  async function getUserInfo(token){ 
    const response = await fetch("http://localhost:3000/my_info", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
    const data = await response.json() 
    console.log('data',data)
    return data 
  }

  return [getUserInfo] 
}

export default useToken 