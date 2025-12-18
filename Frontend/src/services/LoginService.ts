import axios from 'axios';

const API_URL = 'http://localhost:8000'; 

interface LoginData {
  username: string;
  password: string;
}

export const login = async (data: LoginData) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/login`,
      data,
      {
        withCredentials: true, 
      }
    );

    return response.data; 
  } catch (error: any) {
    throw error.response?.data || { detail: 'Login failed' };
  }
};
