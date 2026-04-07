 const validateConfiq = {
    userName: [ 
        { required: true, errorMessage: "Username is requires"} 
    ],
    password: [ 
        { required: true, errorMessage: "password is requires" },
        { minLength: 6, errorMessage: "password must be 6 character or more" }
    ]
}
export default validateConfiq;