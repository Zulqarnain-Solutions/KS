import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../api/authApi";

/*
Create authentication context
This will store user information globally
*/

const AuthContext = createContext();

/*
AuthProvider wraps the entire app
and provides authentication state
*/

export function AuthProvider({ children }) {

  // store logged in user
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  /*
  When app starts we check if user is logged in
  */

  useEffect(() => {

    async function checkAuth() {

      try {

        const data = await getCurrentUser();

        setUser(data);

      } catch (error) {

        // User not logged in
        setUser(null);

      } finally {

        setLoading(false);

      }

    }

    checkAuth();

  }, []);


  /*
  login function
  called after successful login
  */
  function login(userData) {
    // console.log(userData)
    setUser(userData);
  }

  /*
  logout function
  clears user state
  */
  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/*
Custom hook for accessing auth context
*/

export function useAuth() {
  return useContext(AuthContext);
}