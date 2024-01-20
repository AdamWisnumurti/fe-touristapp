import type { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';

export const TouristServices = (token: string) => {
  const getTourist = (
    params?: any,
    //  { page: string }
  ) => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/Tourist`, {
        params,
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: AxiosResponse) => {
        return { data: res.data };
      })
      .catch((err: AxiosError) => {
        return Promise.reject(err);
      });
  };

  const getTouristById = (id: string) => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/Tourist/${id}`, {
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: AxiosResponse) => {
        return { data: res.data };
      })
      .catch((err: AxiosError) => {
        return Promise.reject(err);
      });
  };

  const postTourist = (params: {
    tourist_email: string;
    tourist_name: string;
    tourist_location: string;
  }) => {
    return axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/Tourist`, params, {
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: AxiosResponse) => {
        return { data: res.data };
      })
      .catch((err: AxiosError) => {
        return Promise.reject(err);
      });
  };

  const putTourist = (
    id: string,
    params: {
      tourist_email: string;
      tourist_name: string;
      tourist_location: string;
    },
  ) => {
    return axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/api/Tourist/${id}`, params, {
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: AxiosResponse) => {
        return { data: res.data };
      })
      .catch((err: AxiosError) => {
        return Promise.reject(err);
      });
  };

  const deleteTourist = (id: string) => {
    return axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/api/Tourist/${id}`, {
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: AxiosResponse) => {
        return { data: res.data };
      })
      .catch((err: AxiosError) => {
        return Promise.reject(err);
      });
  };

  return {
    getTourist,
    getTouristById,
    postTourist,
    putTourist,
    deleteTourist,
  };
};

export default TouristServices;
