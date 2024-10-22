import axios, { AxiosError } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const signUp = async (email: string, password: string, name: string): Promise<{ token: string }> => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`,  { email, password, name });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data?.message || 'Lỗi đăng ký!');
    } else {
      throw new Error('Lỗi đăng ký!');
    }
  }
};

export const signIn = async (email: string, password: string): Promise<void> => {
  try {
    await axios.post(`${API_URL}/auth/login`, { email, password }, {
      withCredentials: true  
    });
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data?.message || 'Lỗi đăng nhập!');
    } else {
      throw new Error('Lỗi đăng nhập!');
    }
  }
};


export const getProfile = async (): Promise<any> => {
  try {
    const response = await axios.get(`${API_URL}/auth/profile`, {
      withCredentials: true 
    });
    
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data?.message || 'Lỗi lấy thông tin người dùng!');
    } else {
      throw new Error('Lỗi lấy thông tin người dùng!');
    }
  }
};
