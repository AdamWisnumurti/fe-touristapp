import type { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';

export const AuthServices = () => {
  const postLogin = (params: { email: string; password: string }) => {
    return axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/authaccount/login`, params)
      .then((res: AxiosResponse) => {
        return { data: res.data };
      })
      .catch((err: AxiosError) => {
        return Promise.reject(err);
      });
  };

  const postRegister = (params: {
    email: string;
    password: string;
    name: string;
  }) => {
    return axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/authaccount/registration`,
        params,
      )
      .then((res: AxiosResponse) => {
        return { data: res.data };
      })
      .catch((err: AxiosError) => {
        return Promise.reject(err);
      });
  };

  const getUserDetail = (id: string, token: string) => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        return { data: res.data };
      })
      .catch((err) => Promise.reject(err));
  };

  return {
    postLogin,
    postRegister,
    getUserDetail,
  };
};

export default AuthServices;
