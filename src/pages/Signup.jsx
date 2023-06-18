import React from 'react';
import './../styles/login.css';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister, selectIsAuth } from '../redux/slices/auth';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch();


  const { register, handleSubmit, formState: { isValid} } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: ''
    },
    mode: 'onChange', 
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));
    console.log(data);
    if(!data.payload) {
      return alert('Failed to sign up!');
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
          <h1 className='login'>Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='login__form' action="">
            <input {...register('fullName', { required: 'Enter your First and last name'})} className='input' type="text" placeholder='First and last name' required/>
            <input {...register('email', { required: 'Enter the email address'})} className='input' type="email" placeholder='Email address' required/>
            <input {...register('password', { required: 'Enter the password'})} className='input' type="password" placeholder='Password' required/>
            <button disabled={!isValid} className='submit' type='submit'>Sign up</button>
          </form>
          <div className='wrapper'>
            <p className='ask'>Already registered?</p>
            <NavLink className='auth' to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;