const axios = require("axios").default;


export const post = async (apiURL, path, payload) => {
  return await fetch(apiURL + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};
export const authPost = async (apiURL, path, payload, token) => {
  // need to test 
  return await axios.post((apiURL + path), payload, {
    headers: { Authentication: `bearer ${token}`}
  })

  // return await fetch(apiURL + path, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authentication: `bearer ${token}`,
  //   },
  //   body: JSON.stringify(payload),
  // });
};
export const get = async (apiUrl, path) => {
  return await fetch(apiUrl + path, {
    method: "GET",
    headers: { method: "GET", "Content-Type": "application/json" },
  });
};
export const authGet = async (apiUrl, path, token) => {
  await fetch(apiUrl + path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authentication: `bearer ${token}`,
    },
  });
};
