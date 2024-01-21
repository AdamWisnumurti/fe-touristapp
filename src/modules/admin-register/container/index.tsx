import React, { useCallback, useState } from 'react';
import { Button, InputLabel } from '@global/component';
import { hasEmptyValue, isValidEmail } from '@global/util';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { AuthServices } from '@service';
import { useRouter } from 'next/router';

export const AdminRegister = () => {
  const { postRegister } = AuthServices();
  // const { login, isLoadingLogin } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const handleSubmit = useCallback(async () => {
    setIsLoading(true);
    try {
      await postRegister({
        email: data?.email,
        name: data?.name,
        password: data?.password,
      });
      toast("You've Registered Your Account", {
        type: 'success',
        autoClose: 3000,
      });
      setTimeout(() => {
        router.push('/login');
      }, 300);
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
    } finally {
      setIsLoading(false);
    }
  }, [data, postRegister, router]);

  return (
    <section className="h-full bg-neutral-10 py-[94px]">
      <div className="inset-0 m-auto flex max-w-lg flex-col rounded-xl border border-neutral-20 bg-white p-5">
        <h1 className="text-2xl font-semibold text-neutral-90">Register</h1>
        <p className="mb-6 text-sm text-neutral-70">
          {/* Masukan Email dan kata sandi untuk masuk akun kamu */}
        </p>
        {/* <form onSubmit={loginKepesertaan}> */}
        <div
          className="flex w-full flex-col space-y-6"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
        >
          <InputLabel
            label="Email"
            placeholder="Input email"
            value={data.email}
            onChange={(e) =>
              setData((curr) => ({
                ...curr,
                email: e.target.value,
              }))
            }
            isError={data?.email && !isValidEmail(data?.email)}
            errorMessage="Email must be valid"
          />
          <InputLabel
            label="Fullname"
            placeholder="Input Fullname"
            value={data.name}
            onChange={(e) =>
              setData((curr) => ({
                ...curr,
                name: e.target.value,
              }))
            }
          />
          <InputLabel
            label="Password"
            placeholder="Input Password"
            type="password"
            value={data.password}
            onChange={(e) =>
              setData((curr) => ({
                ...curr,
                password: e.target.value,
              }))
            }
          />
          <InputLabel
            label="Confirm Password"
            placeholder="Input Password"
            type="password"
            value={data.confirmPassword}
            onChange={(e) =>
              setData((curr) => ({
                ...curr,
                confirmPassword: e.target.value,
              }))
            }
            isError={
              data.confirmPassword && data?.password !== data?.confirmPassword
            }
            errorMessage="Confirmation password must be equal to password"
          />
          <Button
            onClick={handleSubmit}
            isLoading={isLoading}
            disabled={
              hasEmptyValue(data) ||
              isLoading ||
              data?.confirmPassword !== data?.password
            }
          >
            Submit
          </Button>
        </div>
        {/* </form> */}
        <p className="mt-4 text-center font-medium text-neutral-70">
          Already Have an Account?
        </p>
        <div className="flex justify-center">
          <Link
            className="my-1.5 text-center font-semibold text-primary"
            href="/register"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};
