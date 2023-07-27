function SignupAuth(values) {
    let error = {}
    
    const password_pattern = /^[a-zA-Z0-9]{8,}$/
    const username_pattern = /^[a-zA-Z0-9]{3,}$/ //alpha numeric character
    const mobilenumber_pattern = /^[0-9]{10}$/
  

  
    
  
    if (!values.confirmPassword) {
      error.confirmPassword = "Confirm Password should not be empty";
    } else if (String(values.confirmPassword) !== String(values.password)) {
      error.confirmPassword = "Confirm Password didn't match";
    } else {
        error.confirmPassword = "";
    }

    if (!values.username) {
      error.username = "Username should not be empty";
    } else if (!username_pattern.test(values.username)) {
      error.username =
        "Username must be at least 3 characters long and can only contain alphanumeric characters";
    } else {
        error.username="";
    }
  
    if (!values.mobileNumber) {
      error.mobileNumber = "Mobile Number should not be empty";
    } else if (!mobilenumber_pattern.test(values.mobileNumber)) {
      error.mobileNumber = "Invalid Mobile Number format";
    } else {
        error.mobileNumber="";
    }
  
    if (!values.userRole) {
      error.userRole = "admin/user should be selected";
    } else {
        error.userRole="";
    }
  
    return error;
  }
  
<<<<<<< HEAD:reactapp/components/Auth.jsx
<<<<<<< HEAD:reactapp/components/Auth.jsx
  export default SignupAuth;
=======
<<<<<<< HEAD:reactapp/src/components/Auth/SignupAuth.jsx
  export default SignupAuth;
  
=======
<<<<<<< HEAD
  export default SignupAuth;
=======
<<<<<<< HEAD
  export default SignupAuth;
=======
  export default SignupAuth;
>>>>>>> 7159bf44cc39b8d8af92fc9321edd24026ad0a45
>>>>>>> 46f7519582fbe2fdbe5b902d3bb9d8dfef0b9f34
>>>>>>> 6dae694a0c477cd197956f6283da6951f854b505:reactapp/src/components/Auth.jsx
>>>>>>> 9301475c74331303918272edc04a13ce1257d786:reactapp/src/components/Auth/SignupAuth.jsx
=======
  export default SignupAuth;
  
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f:reactapp/src/components/Auth/SignupAuth.jsx
