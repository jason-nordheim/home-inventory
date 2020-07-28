export const post = async (apiURL, path, payload) => {
  return await fetch(apiURL + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};
export const authPost = async (apiURL, path, payload, token) => {
  return await fetch(apiURL + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authentication: `bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
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
