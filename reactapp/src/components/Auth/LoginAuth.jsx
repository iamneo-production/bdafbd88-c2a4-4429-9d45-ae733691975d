function LoginAuth(values){
    let error = {}
    const password_pattern = /^[a-zA-Z0-9]{2,}$/
    //const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === "") {
        error.email="Email should not be empty"
    }
     else {
        error.email=""
    }

    
    

    return error;
}

export default LoginAuth