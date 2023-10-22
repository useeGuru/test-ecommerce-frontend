import axios from 'axios';

const BASE_URL = 'https://railway.app/project/e5c0849c-61bf-433a-87f3-b6ea688cfe97/service/a1d1d61f-3cad-44ab-ae93-7b02495366a4';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGEzOGUwYjczZTg5NTczZDAxNmZmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzA3NTI3OSwiZXhwIjoxNjYzMTYxNjc5fQ.sLeBTfgAymobkEF1rcOzexB8-ixEXKWat-7lRFfaKVQ';

export const publicRequest = axios.create(
  {
    baseURL: BASE_URL
  }
);

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${TOKEN}`
  }
});