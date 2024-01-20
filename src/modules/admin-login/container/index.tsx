/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState } from 'react';
import { Button, InputLabel } from '@global/component';
import { hasEmptyValue } from '@global/util';
import { useAuth } from '@global/hook';
import { toast } from 'react-toastify';
import Link from 'next/link';

export const AdminLogin = () => {
  const { login, isLoadingLogin } = useAuth();
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const loginUser = useCallback(async () => {
    try {
      await login(data.username, data.password);
    } catch (error: any) {
      toast(
        error?.response?.data?.message ||
          error?.statusText ||
          'Internal Server Error',
        {
          type: 'error',
          autoClose: 3000,
        },
      );
    }
  }, [data, login]);

  return (
    <section className="h-full bg-neutral-10 py-[94px]">
      <div className="inset-0 m-auto flex max-w-lg flex-col rounded-xl border border-neutral-20 bg-white p-5">
        <h1 className="text-2xl font-semibold text-neutral-90">
          Selamat Datang
        </h1>
        <p className="mb-6 text-sm text-neutral-70">
          Masukan Email dan kata sandi untuk masuk akun kamu
        </p>
        {/* <form onSubmit={loginKepesertaan}> */}
        <div className="flex w-full flex-col space-y-6">
          <InputLabel
            label="Email"
            placeholder="Input email"
            value={data.username}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                loginUser();
              }
            }}
            onChange={(e) =>
              setData((curr) => ({
                ...curr,
                username: e.target.value,
              }))
            }
            maxLength={16}
          />
          <InputLabel
            label="Password"
            placeholder="Input Password"
            type="password"
            value={data.password}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                loginUser();
              }
            }}
            onChange={(e) =>
              setData((curr) => ({
                ...curr,
                password: e.target.value,
              }))
            }
          />
          {/* <div className='flex justify-end'>
          <Link
            className='mb-4 mt-2 py-1 text-end text-sm font-semibold text-[#1389CD]'
            href='/forget-password'>
            Forget Password?
          </Link>
        </div> */}
          <Button
            onClick={loginUser}
            isLoading={isLoadingLogin}
            disabled={hasEmptyValue(data) || isLoadingLogin}
          >
            Login
          </Button>
        </div>
        {/* </form> */}
        <p className="mt-4 text-center font-medium text-neutral-70">
          Don't Have an Account?
        </p>
        <div className="flex justify-center">
          <Link
            className="my-1.5 text-center font-semibold text-primary"
            href="/register"
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
};
