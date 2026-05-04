
import Label from '../../component/Label/Label.jsx'
import Input from '../../component/Inputs/Input.jsx'
import Button from '../../component/Button/Button.jsx'
import { useState } from 'react'
import { useValidate } from '../../hooks/LoginHook/useValidate.js'
import { loginUser } from '../../api/authApi.js'
import { useAuth } from '../../contexts/AuthContext.jsx'
import validateConfiq from '../../../validateConfiq.js'


export default function Login({switchToRegister}) {

    // This is for input values state
    const [ inputData, setInputData ] = useState({
        userName: "",
        password: ""
    })

    // Call useValidate hook to validate fields values and return errors if have 
    const [errors, validate, setErrors] = useValidate(inputData, validateConfiq);

    // This state for stop call api more than one 
    const [ buttonStatus, setButtonStatus] = useState(false);
 
    // Here is an AuthContext call
    const { login, user } = useAuth();

    // Handle onChange values when user enter data in input fields
    function handleOnchange(e) {
        const {value, name} = e.target;
        setInputData( (previous) => 
        ({...previous, [name] : value }))
    }

    // Handle submit or validate data
    async function handleSubmit(e) {
        e.preventDefault();
        setButtonStatus(true);

        // If user already click on login or register btn early return
        if (buttonStatus) return;

        // Here we are calling Validate function 
        // in hook to check data is valid or not and
        //  return errors if have
        const errorsData =  validate();

        // check errors length if errorsData
        //  length greater than 0 stop next processing 
        // and return from here
        if(Object.entries(errorsData).length) return;

        // Now send data to api layer 
        try {
            // setIsSubmitting(true)   /// Start logging
            // Send request to baackend
            const response = await loginUser(inputData);

            //  console.log(response.statusCode);
            // Backend should return token + user
            login(response)
            
        } catch (error) {

            setButtonStatus(false);
            // Show errors to user
            console.error("Login error!!!!", error.message);
            setErrors ({
                userName: error.message,
                password: error.message
            });
            
        } finally {
            setButtonStatus(false); // always reset
          }

    }


  return (
    <div>
        <h1>Sign in</h1>
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
            text =  { buttonStatus ? " Logging..." : "Sign in" } 
            className="login-btn"
            disabled={buttonStatus}
            />
          </form>

          <p className="text-[12px] text-[#2c303b]">Don't have an account? 
            <span className="text-blue-800 hover:underline" onClick={switchToRegister}>
                create account
            </span>
          </p>
    </div>
  )
}
