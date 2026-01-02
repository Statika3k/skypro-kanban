import axios from 'axios';

const AUTH_URL = 'https://wedev-api.sky.pro/api/user'.trim();

export async function signIn({ login, password }) {
  try {
    const response = await axios.post(`${AUTH_URL}/login`, { login, password }, {
      headers: {
        'Content-Type': "",
      },
    });
    return response.data.user; 
  } catch (error) {    
    throw new Error(error.response?.data?.error);
  }
}

export async function signUp({ login, name, password }) {
  try {
    const response = await axios.post(AUTH_URL, { login, name, password }, {
      headers: {
        'Content-Type': "",
      },
    });
    return response.data.user; 
  } catch (error) {    
    throw new Error(error.response?.data?.error);
  }
}

export function setToken(token) {
   if (token) {
      localStorage.setItem('token', token);
      console.log("Token saved:", token.substring(0, 20) + "...");
   }
}

export function getToken() {
   const token = localStorage.getItem('token');
   console.log("Token retrieved:", token ? token.substring(0, 20) + "..." : "null");
   return token;
}

export function removeToken() {
   localStorage.removeItem('token');
   console.log("Token removed");
}