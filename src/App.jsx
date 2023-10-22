import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import ShoppingCategorie from './pages/ShoppingCategorie';
import SingleProduct from './pages/SingleProduct';
import ShoppingCart from './pages/ShoppingCart';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import dotenv from 'dotenv';
dotenv.config();

const App = () => {
  const user = useSelector((store) => store.auth.currentUser);
  console.log('user', user)
  return (
    <Switch>
      <PrivateRoute exact path='/'>
        <Home />
      </PrivateRoute>
      <PrivateRoute path='/categories/:category'>
        <ShoppingCategorie />
      </PrivateRoute>
      <Route path='/products/:id'>
        <SingleProduct />
      </Route>
      <Route path='/cart'>
        {user ? <ShoppingCart /> : <Redirect to='/login' /> }
      </Route>
      <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
      <Route path='/signup'>
        {user ? <Redirect to='/' /> : <Signup />}
      </Route>
      <Route path='/resetPassword'><ResetPassword /></Route>
    </Switch>
  );
};

export default App;
