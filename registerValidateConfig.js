// registerValidationConfig.js

const registerValidateConfig = {
  userName: [
    { required: true, errorMessage: "Username is required" },
    { minLength: 3, errorMessage: "Username must be at least 3 characters" }
  ],

  email: [
    { required: true, errorMessage: "Email is required" },
    // { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errorMessage: "Invalid email format" }
  ],

  password: [
    { required: true, errorMessage: "Password is required" },
    { minLength: 6, errorMessage: "Password must be at least 6 characters" }
  ]
};

export default registerValidateConfig;