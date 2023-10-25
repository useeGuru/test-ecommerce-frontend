import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ?? '';
console.log(BACKEND_URL, 'BASE_URL')
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGEzOGUwYjczZTg5NTczZDAxNmZmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzA3NTI3OSwiZXhwIjoxNjYzMTYxNjc5fQ.sLeBTfgAymobkEF1rcOzexB8-ixEXKWat-7lRFfaKVQ';

export const publicRequest = axios.create(
  {
    baseURL: BACKEND_URL
  }
);

export const userRequest = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Authorization': `Bearer ${TOKEN}`
  }
});