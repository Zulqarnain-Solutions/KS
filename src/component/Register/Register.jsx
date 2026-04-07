import React, { useState } from 'react'
import Label from '../Label/Label'
import Input from '../Inputs/Input'
import Button from '../Button/Button'
import { useValidate } from '../../hooks/LoginHook/useValidate'
import registerValidateConfig from '../../../registerValidateConfig'
import { registerUser } from '../../api/authApi'
import { useAuth } from '../../contexts/AuthContext'

export default function Register({switchToLogin}) {

  // This is for input values state
      const [ inputData, setInputData ] = useState({
          userName: "",
          email: "",
          password: ""
      })
  
      // Call useValidate hook to validate fields values and return errors if have 
      const [errors, validate, setErrors] = useValidate(inputData, registerValidateConfig);

      // Button state
      const [buttonStatus, setButtonStatus] = useState(false)

      // Check User Successfully registered or logged in
      const { login } = useAuth();

      // Handle onChange values when user enter data in input fields
    function handleOnchange(e) {
        const {value, name} = e.target;
        setInputData( (previous) => 
        ({...previous, [name] : value }))
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // Change Button state so that user cannt press again 
        setButtonStatus(true);

        // Here we are calling Validate function 
        // in hook to check data is valid or not and
        //  return errors if have
        const errorsData = validate();
        
        // console.log(errorsData)
        // check errors length if errorsData
        //  length greater than 0 stop next processing 
        // and return from here
        if(Object.entries(errorsData).length) return;

        try{
          // Send request to baackend
          const response = await registerUser(inputData);

          login(response)
          console.log(response);

        } catch (error) {
          setButtonStatus(false);
          console.error("Register error!!!!", error.message);
        }
        
     }
      

  return (
    <>
     <div>
            <h1>Sign Up</h1>
              <h2>Welcome</h2>
              <p className="des">Sign in to your account or create a new one</p>
    
              {/*   */}
              <form action="" onSubmit={handleSubmit}>
                {/* Username group */}
                {/* lable for username */}
                <Label 
                text="Username" 
                htmlFor="userName"/>
    
                {/* Input field for usernaem */}
                <Input 
                className="input"
                type="text" 
                placeholder="Enter your username" 
                name="userName"
                value={inputData.userName}
                onChange={handleOnchange}
                error={errors.userName}
                />

                  {/* Email group */}
                {/* lable for Email */}
                <Label 
                text="Email" 
                htmlFor="email"/>
    
                {/* Input field for usernaem */}
                <Input 
                className="input"
                type="email" 
                placeholder="Enter your email" 
                name="email"
                value={inputData.email}
                onChange={handleOnchange}
                error={errors.email}
                />
    
                {/* Password group */}
                {/* lable for password */}
                <Label 
                text="Password" 
                htmlFor="password"/>
    
                {/* Input field for password */}
                <Input 
                className="input"
                type="text" 
                placeholder="Enter your password"
                name="password"
                value={inputData.password}
                onChange={handleOnchange}
                error={errors.password}
                />
    
                {/* Button */}
                <Button 
                type="submit"
                text={ buttonStatus? "Register..." : "Register" }
                className="login-btn" 
                disabled={buttonStatus}
                />
                
              </form>
    
              <p className="text-[12px] text-[#7a7d85]">Already have an account?   
                <span className="text-blue-800 hover:underline" onClick={switchToLogin}>
                    Sign in
                    </span>
                </p>
        </div>
    </>
  )
}
