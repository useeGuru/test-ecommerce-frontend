import { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure } from './auth-slice';
import { publicRequest } from '../request-methods';

export const login = (user) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const response = await publicRequest.post('/auth/login', user);
      dispatch(loginSuccess(response.data));
    } catch (err) {
      console.log('33333333', err.response.data)
      dispatch(loginFailure(err.response.data));
    }
  };
};

export const register = (user_info) => {
  return async (dispatch) => {
    dispatch(registerStart());
    try {
      const response = await publicRequest.post('/auth/register', user_info);
      dispatch(registerSuccess(response.data));
    } catch (err) {
      dispatch(registerFailure(err.response.data.errors));
    }
  };
};

// export const resetPassword = (email) => {
//   return async (dispatch) => {
//     dispatch(resetPasswordStart());
//     try {
//       const response = await publicRequest.post('/auth/resetPassword', email);
//       dispatch(resetPasswordSuccess(response.data));
//     } catch (err) {
//       dispatch(resetPasswordFailure(err.response.data.errors));
//     }
//   };
//   console.log('email', email);
// };