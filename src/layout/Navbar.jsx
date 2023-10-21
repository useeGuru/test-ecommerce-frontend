import React from 'react';

import { Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { initialCart } from '../store/cart-slice';
import { logout } from '../store/auth-slice';

const Navbar = () => {
  const dispatch = useDispatch();
  let history = useHistory()
  const auth = useSelector((store) => store.auth);
  const totalQantity = useSelector((store) => store.cart.totalQantity);
  
  const logOut = () => {
    dispatch(initialCart())
    dispatch(logout())
    history.push('/login')
  }
  return (
    <nav className='grid grid-cols-2 p-4 border-b font-semibold h-18 bg-[antiquewhite]'>
      <h1 className='font-bold text-3xl uppercase flex items-center justify-start px-4 tracking-wider'>
        <a href='/'>Test</a>
      </h1>
      <div className='flex justify-end items-center px-4 text-md md:text-lg'>
        {auth && auth.currentUser ?
          <>
            <Link to='/' className='uppercase px-4 py-2'>
               Home
            </Link>
            <div className="h-[40px] pl-[10px] mr-[10px] hover:bg-lightgrey flex items-center justify-start" onClick={logOut}>
              <p className="text-zinc-800 hover:cursor-pointer text-xl">Logout</p>
            </div>
          </> 
          : 
          <>
            <Link to='/signup' className='uppercase px-4 py-2'>
               Register
            </Link>
            <Link to='/login' className='uppercase px-4 py-2'>
               Sign in
            </Link>
          </>
          }
        <Link to='/cart'>
          <Badge
            badgeContent={totalQantity}
            color='primary'
            className='cursor-pointer'
          >
            <ShoppingCart />
          </Badge>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
