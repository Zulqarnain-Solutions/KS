
import { Link } from "react-router-dom";
import Model from "./Model";
import Login from "../Login/Login.jsx";
import { useEffect, useState } from "react";
import Register from "../Register/Register.jsx";
import { useAuth } from "../../contexts/AuthContext.jsx";

function HeaderActions() {

  /// This is for Model that point Model is open or not 
  const [modelIsOpen, setModelIsOpen] = useState(false);

  // Here is an state auth Type like login or register user
  const [authType, setAuthType] = useState("Login");

  // Check user have or successfully logged in then close model
  const { user } = useAuth();

  useEffect( () => {
    setModelIsOpen(false);
  }, [user] )




  return (
    <div className="header-actions">

      {/* Login Button */}
      <span>
        <Link 
        className="btn btn-login" 
        onClick={() => setModelIsOpen(true)}>
          Login
        </Link>

        {/* Here Model will open */}
        <Model 
        modelIsOpen={modelIsOpen} 
        setModelIsOpen={setModelIsOpen}>
          { 
            authType === "Login" ? (
            <Login switchToRegister = { () => setAuthType("Register")}/> 
              )  :  (
            <Register switchToLogin = { () => setAuthType("Login")}/> 
          )}
          
        </Model>
      </span>

      {/* Register Button */}
      {/* <Link 
      className="btn btn-primary">Get Started</Link> */}
    </div>
  );
}

export default HeaderActions;
