import type { Dispatch, SetStateAction } from 'react';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { AuthServices } from '@service';

interface AuthContextProps {
  token: string | null;
  isLoggedIn: boolean;
  userName: string;
  dataProfile: any;
  modalError: { isOpen: boolean; message: string };
  setModalError: Dispatch<SetStateAction<{ isOpen: boolean; message: string }>>;
  userID: string | null;
  isLoading: boolean;
  isLoadingLogin: boolean;
  guard: () => Promise<void>;
  login: (nik_handphone: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AUTH_INITIAL_VALUES: AuthContextProps = {
  token: null,
  isLoggedIn: false,
  userName: 'Guest',
  dataProfile: null,
  modalError: { isOpen: false, message: '' },
  setModalError(): void {
    throw new Error('Function not implemented.');
  },
  userID: '',
  isLoading: true,
  isLoadingLogin: false,
  guard(): Promise<void> {
    throw new Error('Function not implemented.');
  },
  login(_: string, __: string): Promise<void> {
    throw new Error('Function not implemented.');
  },
  logout(): Promise<void> {
    throw new Error('Function not implemented.');
  },
};

const AuthContext = createContext(AUTH_INITIAL_VALUES);

export interface AuthProviderProps {
  children: React.ReactNode;
  apiUrl: string;
  cookieName?: string;
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { postLogin, getUserDetail } = AuthServices();
  const [userName, setUserName] = useState<string>('');
  const [dataProfile, setDataProfile] = useState<any>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalError, setModalError] = useState({ isOpen: false, message: '' });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingLogin, setIsLoadingLogin] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const t = localStorage.getItem('access-token');
      return t;
    }
    return null;
  });
  const [userID, setUserID] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const id = localStorage.getItem('user-id');
      return id;
    }
    return null;
  });

  const guard = useCallback(async () => {
    setIsLoading(true);
    if (token) {
      try {
        const resProfile = await getUserDetail(userID, token);
        setDataProfile(resProfile?.data);
        setUserID(resProfile?.data?.id);
        setUserName(resProfile?.data?.name);
        setIsLoggedIn(true);
      } catch (error: any) {
        setToken('');
        setUserID('');
        setUserName('');
        setIsLoggedIn(false);
        localStorage.removeItem('access-token');
        localStorage.removeItem('user-id');
        router.push('/login');
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
      // try {
      //   const resProfile = await checkProfile();
      //   setUsername(resProfile?.data?.result?.nama);
      //   setDataProfile(resProfile?.data?.result);
      //   if (!resProfile?.data?.result?.id) {
      //     localStorage.removeItem('auth-token');
      //     localStorage.removeItem('refresh-token');
      //     setNik('');
      //     setUsername('');
      //     router.push('/');
      //     return;
      //   }
      // } catch (error) {
      //   localStorage.removeItem('access-token');
      //   localStorage.removeItem('refresh-token');
      //   setNik('');
      //   setUsername('');
      //   router.push('/');
      // }
    } else {
      router.push('/login');
    }
    setIsLoading(false);
  }, [getUserDetail, router, token, userID]);

  const login = useCallback(
    async (email: string, password: string): Promise<void> => {
      setIsLoadingLogin(true);
      try {
        const resLogin = await postLogin({
          email,
          password,
        });
        // console.log(resLogin?.data?.data?.Id);
        setToken(resLogin?.data?.data?.Token);
        setUserID(resLogin?.data?.data?.Id);
        localStorage.setItem('access-token', resLogin?.data?.data?.Token);
        localStorage.setItem('user-id', resLogin?.data?.data?.Id);
        setIsLoggedIn(true);
        router.push('/');
      } catch (error: any) {
        setIsLoggedIn(false);
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
        setIsLoadingLogin(false);
      }
    },
    [postLogin, router],
  );

  const logout = useCallback(async () => {
    setToken('');
    setUserID('');
    setUserName('');
    setDataProfile(null);
    setIsLoggedIn(false);
    localStorage.removeItem('access-token');
    localStorage.removeItem('user-id');
    router.push('/login');
  }, [router]);

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        token,
        isLoggedIn,
        userName,
        dataProfile,
        userID,
        modalError,
        setModalError,
        isLoading,
        isLoadingLogin,
        guard,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

export default useAuth;
