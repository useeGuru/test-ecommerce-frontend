import React, { useRef } from 'react';

import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

// import { resetPassword } from '../store/auth-actions';
import { useHistory } from 'react-router-dom';

const ResetPassword = () => {
  const history = useHistory();
  const auth = useSelector((store) => store.auth);
  const emailRef = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (!email.trim()) return;
    toast.success('ResetPassword Success! Please wait a moment. And check your email.');
    // dispatch(
    //   resetPassword({
    //     email
    //   })
    // );
    console.log('email', email);
    emailRef.current.value = '';
  };
  const comeback = () => {
    history.goBack();
  }

  return (
    <div className='px-4 w-full h-screen flex justify-center items-center bg-login bg-no-repeat bg-cover'>
      <form
        onSubmit={formSubmitHandler}
        action=''
        className='border bg-white p-6 flex flex-col min-w-[17rem] sm:min-w-[22rem] md:min-w-[25rem]'
      >
        <h1 className='uppercase text-xl mb-4 font-bold'>Reset Password</h1>
        <input
          className='p-2 mb-4 border-2 rounded focus:outline-none'
          type='email'
          placeholder='Email'
          ref={emailRef}
        />
        <button
          className='mb-4 bg-teal-700 text-white p-2 disabled:bg-teal-500 disabled:cursor-not-allowed'
          disabled={auth.isFetching}
        >
          Send Email
        </button>
        <button
          className='mb-4 bg-teal-700 text-white p-2 disabled:bg-teal-500 disabled:cursor-not-allowed' onClick={comeback}
        >
          Back
        </button>
      </form>
      
    </div>
  );
};

export default ResetPassword;
