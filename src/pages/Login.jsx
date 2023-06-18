import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import './../styles/login.css';
import { fetchAuth, selectIsAuth } from '../redux/slices/auth';

const Login = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch();


  const { register, handleSubmit, formState: { isValid} } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange', 
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    console.log(data);
    if(!data.payload) {
      return alert('Failed to log in!');
    }
    
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <>
      <div className='login__container'>
        <div className='login__wrapper'>
          <h1 className='login'>Sign in</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='login__form' action="">
            <input {...register('email', { required: 'Enter the email address'})} className='input' type="email" placeholder='Email address' required/>
            <input {...register('password', { required: 'Enter the password'})} className='input' type="password" placeholder='Password' required/>
            <span className='forgot'>Forgot password?</span>
            <button disabled={!isValid} className='submit' type='submit'>Login</button>
          </form>
          <div className='wrapper'>
            <p className='ask'>New customer?</p>
            <NavLink className='auth' to="/signup" >Sign up</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
