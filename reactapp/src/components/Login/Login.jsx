import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======
import LoginAuth from '../Auth/LoginAuth';
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f
import axios from 'axios';
import './Login.css';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

<<<<<<< HEAD
=======
  const [errors, setErrors] = useState({});
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
<<<<<<< HEAD

    axios
      .post('https://8080-ffeefccdcaadefffdddfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/api/Auth/login', values)
      .then((res) => {
        if (res.data.status === 'admin') {
          navigate('/admin');
        } else if (res.data.status === 'customer') {
          navigate('/customer');
        } else if (res.data.status === 'jobseeker') {
          navigate('/user');
        } else {
          navigate('/user/signup');
          alert('Invalid Credentials. Please Register.');
        }
      })
      .catch((err) => console.log(err));
=======
    setErrors(LoginAuth(values));
    if (errors.email === '' && errors.password === '') {
      axios
        .post('http://localhost:5131/api/Auth/login', values)
        .then((res) => {
          if (res.data.Status === 'admin') {
            navigate('/admin');
          } else if (res.data.Status === 'customer') {
            navigate('/customer');
          } else if (res.data.Status === 'jobseeker') {
            navigate('/user');
          } else {
            navigate('/user/signup');
            alert('Invalid Credentials. Please Register.');
          }
        })
        .catch((err) => console.log(err));
    }
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f
  };

  return (
    <>
      <div className='d-flex justify-content-center align-items-center p-4 w-100 loginHead'>
        <strong>Login</strong>
      </div>
      <br />
      <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-4 rounded w-25 loginForm'>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <input
                type='text'
                id='email'
                placeholder='Enter Email'
                name='email'
                onChange={handleInput}
                className='form-control rounded-0'
                autoComplete='off'
              />
<<<<<<< HEAD
=======
              {errors.email && <span className='text-danger'>{errors.email}</span>}
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f
            </div>
            <div className='mb-3'>
              <input
                type='password'
                id='password'
                placeholder='Enter Password'
                name='password'
                onChange={handleInput}
                className='form-control rounded-0'
              />
<<<<<<< HEAD
=======
              {errors.password && <span className='text-danger'>{errors.password}</span>}
>>>>>>> 3e42f5cdeb55ed5bb7fc5f042c1d61afa0e9593f
            </div>
            <div className='row'>
              <div className='col-4'>
                <button type='submit' id='loginButton' className='btn btn-success w-100 rounded-0'>
                  Log in
                </button>
              </div>
              <div className='col-4'>
                <div className='mt-1 text-center'>
                  <p>New User/admin?</p>
                </div>
              </div>
              <div className='col-4'>
                <Link to='/user/signup' type='button' id='signupLink' className='btn btn-primary rounded-0'>
                  Sign up
                </Link>
              </div>
              <Outlet />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
