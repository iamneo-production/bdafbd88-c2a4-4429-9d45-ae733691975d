<<<<<<< HEAD
import React, { useState } from "react";
import axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Signup.css';
=======
import React, {useState} from "react";
import axios from 'axios';
import SignupAuth from "../Auth/SignupAuth";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Signup.css'
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f

function Signup(){

    const [values, setValues] = useState({
        email: '',
        password: '',
        username:'',
        mobileNumber:'',
        userRole:'',
        confirmPassword:''
<<<<<<< HEAD
    });

    const navigate = useNavigate();
=======

    })
    const navigate = useNavigate()

    const [errors, setError] = useState('')
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f

    const handleInput = (event)=> {
        setValues(prev => ({...prev,[event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
<<<<<<< HEAD

        axios.post('https://8080-ffeefccdcaadefffdddfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/api/Auth/register', values)
            .then(res => {
                navigate("/user/login");
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center p-4 w-100 signupHead'>
                <strong>Register</strong>
            </div>
            <br/>
            <div className='d-flex justify-content-center align-items-center vh-90 SignupPage'>
=======
        setError(SignupAuth(values));
        if(errors.email === "" && errors.password === "" && errors.username === ""  && errors.mobileNumber === "" && errors.userRole === ""){
            axios.post('http://localhost:5131/api/Auth/register',values)
            .then(res=>{
                navigate("/user/login");
            })
            .catch(err=>console.log(err));
        }
    }
    return(
        <>
        <div className='d-flex justify-content-center align-items-center p-4 w-100 signupHead'>
        <strong>Register</strong>
        </div>
        <br/>
        <div className='d-flex justify-content-center align-items-center vh-90 SignupPage'>
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f
                <div className='p-1 rounded w-25 signupForm'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <input type="text" id="admin/user/jobseeker" placeholder='Enter admin/user/jobseeker' name='userRole'
                            onChange={handleInput} className='form-control rounded-0' autoComplete='off'/>
<<<<<<< HEAD
=======
                            {errors.userRole && <span className='text-danger'>{errors.userRole}</span>}
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f
                        </div>
                        <div className='mb-3'>
                            <input type="email" id="email" placeholder='Enter email' name='email'
                            onChange={handleInput} className='form-control rounded-0' autoComplete='off'/>
<<<<<<< HEAD
=======
                            {errors.email && <span className='text-danger'>{errors.email}</span>}
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f
                        </div>
                        <div className='mb-3'>
                            <input type="text" id="username" placeholder='Enter Username' name='username'
                            onChange={handleInput} className='form-control rounded-0' autoComplete='off'/>
<<<<<<< HEAD
=======
                            {errors.username && <span className='text-danger'>{errors.username}</span>}
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f
                        </div>
                        <div className='mb-3'>
                            <input type="text" id="mobileNumber" placeholder='Enter Mobilenumber' name='mobileNumber'
                            onChange={handleInput} className='form-control rounded-0' autoComplete='off'/>
<<<<<<< HEAD
=======
                            {errors.mobileNumber && <span className='text-danger'>{errors.mobileNumber}</span>}
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f
                        </div>
                        <div className='mb-3'>
                            <input type="password" id="password" placeholder='Password' name='password'
                            onChange={handleInput} className='form-control rounded-0' />
<<<<<<< HEAD
=======
                            {errors.password && <span className='text-danger'>{errors.password}</span>}
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f
                        </div>
                        <div className='mb-3'>
                            <input type="password" id="confirmPassword" placeholder='Confirm Password' name='confirmPassword'
                            onChange={handleInput} className='form-control rounded-0' />
<<<<<<< HEAD
=======
                            {errors.confirmPassword && <span className='text-danger'>{errors.confirmPassword}</span>}
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f
                        </div>
                        <div>
                            <div className='col'>
                                <button type='submit' id="loginButton" className='btn btn-success w-100 rounded-0'> Submit</button>
                            </div>
                            <div className='d-flex justify-content-center'>
                               <p>Already an user?</p>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Link to='/user/login' type="button" id='signupLink' className="btn btn-primary rounded-0"> Login </Link>
                            </div>
                            <Outlet/>
                        </div> 
                    </form>
                </div>
<<<<<<< HEAD
            </div>
        </>
    )
}

export default Signup;
=======
        </div>
    </>
    )
}

export default Signup
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f
