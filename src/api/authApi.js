
import { get, post } from "../utils/httpClient";

/*
This function sends login request to backend
*/

 async function loginUser(credentials) {

  const data = await post("/users/login", credentials);

  return data;
}

/*
This function sends logout request to backend
*/

 async function logout() {

  const data = await get("/users/logout");

  return data;
}


/*
Get current logged in user

This endpoint reads the cookie
and returns user data
*/

 async function getCurrentUser() {
  return get("/users/verifyUserLoggedIn");
}

//This function send register user request to backend
 async function registerUser(user) {
  return post("/users/register", user);
}

 async function updateUserDetails(data) {
  return post("/users/updateAccountDetails", data);
}


async function getCourses() {
  return get("/course/getCourses")
}

async function enroll(data) {
  return post("/course/Enrollment", data)
}

async function sendMessage(data){
  return post("/contact/addmessage", data)
}

export {
  loginUser, 
  getCurrentUser, 
  logout, 
  registerUser, 
  updateUserDetails, 
  getCourses, 
  enroll, 
  sendMessage
};