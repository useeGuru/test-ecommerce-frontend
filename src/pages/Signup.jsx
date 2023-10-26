import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import { register } from '../store/auth-actions';

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
};

const validationSchema = Yup.object({
  firstname: Yup.string().required('Please enter first name'),
  lastname: Yup.string().required('Please enter last name'),
  username: Yup.string().required('Please enter user name'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter email'),
  password: Yup.string().required('Please enter password'),
  confirmPassword: Yup.string().required('Please confirm password'),
});

const Signup = () => {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  const errors = auth.error
  console.log('errors', errors);
  console.log('success', auth);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        register({
          firstname: values.firstname,
          lastname: values.lastname,
          username: values.username,
          email: values.email,
          password: values.password
        })
      );
      console.log('info', values);
    },
  });
  return (
    <div className='px-4 w-full h-screen flex justify-center items-center bg-login bg-no-repeat bg-cover'>
      <form
        onSubmit={formik.handleSubmit}
        className='border bg-white p-6 flex flex-col items-center min-w-[17rem] sm:min-w-[22rem] md:min-w-[35rem] max-w-[25rem]'
        noValidate
      >
        <h1 className='uppercase text-xl mb-4 font-bold'>Sign up</h1>
        {(errors && errors.length > 0) && errors.map((err) => (<p key={err.value} className='text-red-500'>{err.msg}</p>)) || <p></p>}
        <div className='grid gap-4 md:grid-cols-2 mb-4 mt-2'>
          <div className='flex flex-col'>
            <input
              className='block p-2 border-2 rounded focus:outline-none'
              type='text'
              placeholder='First Name'
              name={'firstname'}
              value={formik.values.firstname}
              onChange={formik.handleChange}
            />
            {formik.touched.firstname && formik.errors.firstname && (
              <p className='text-red-400'>{formik.errors.firstname}</p>
            )}
          </div>
          <div className='flex flex-col'>
            <input
              className='block p-2 border-2 rounded focus:outline-none'
              type='text'
              placeholder='Last Name'
              name={'lastname'}
              value={formik.values.lastname}
              onChange={formik.handleChange}
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <p className="text-red-400">{formik.errors.lastname}</p>
            )}
          </div>
        </div>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <div className='flex flex-col'>
            <input
              className='block p-2 border-2 rounded focus:outline-none'
              type='text'
              placeholder='Username'
              name={'username'}
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-400">{formik.errors.username}</p>
            )}
          </div>
          <div className='flex flex-col'>
            <input
              className='block p-2 border-2 rounded focus:outline-none'
              type='email'
              placeholder='Email'
              name={'email'}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-400">{formik.errors.email}</p>
            )}
          </div>
        </div>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <div className='flex flex-col'>
            <input
              className='block p-2 border-2 rounded focus:outline-none'
              type='password'
              placeholder='Password'
              name={'password'}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-400">{formik.errors.password}</p>
            )}
          </div>
          <div className='flex flex-col'>
            <input
              className='block p-2 border-2 rounded focus:outline-none'
              type='password'
              placeholder='Confirm Password'
              name={'confirmPassword'}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="text-red-400">{formik.errors.confirmPassword}</p>
            )}
          </div>
        </div>

        <p className='mb-4 '>
          By Creating an accounct I consent to the processing of my personal
          data in accordance with the &nbsp;
          <a href='' className='uppercase font-bold'>
            Privacy policy
          </a>
        </p>
        <button className='mb-4 bg-teal-700 text-white p-2' type={'submit'}>Create</button>
        <Link to='/login' className='capitalize underline mb-4'>
          Already have an account
        </Link>
      </form>
    </div>
  );
};

export default Signup;
