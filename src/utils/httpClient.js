/*
This file creates a reusable HTTP client
for communicating with the backend API.
*/

/// This is For Local development
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/// This is For production
const API_URL = import.meta.env.VITE_API_URL;

// This method is for post 
export async function post(endpoint, data) {

  // Here we are checking is data plain text obj or have File 
  // If have Plain obj then add content type ...json 
  const isFormData = data instanceof FormData;

  console.log("hello");
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    credentials: "include", // IMPORTANT for cookies
    sameSite: "None",  // REQUIRED for cross-origin
    headers: isFormData ? 
    undefined :
    {
      "Content-Type": "application/json",
    },
    body: isFormData ? data :  JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  console.log(result);
  return result;
}



// This method is only for get and verify user that logged in or not
export async function get(endpoint) {

  
  const response = await fetch(` ${API_URL}${endpoint} `, {
    method: "Get",
    credentials: "include", // IMPORTANT for cookies
    sameSite: "None",  // REQUIRED for cross-origin

  });

  const result = await response.json();
  // console.log(result);
  if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result;
}