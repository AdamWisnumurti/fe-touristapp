import type { ReactElement } from 'react';
import React, { useCallback, useEffect, useState } from 'react';
// import { Home } from '@beranda/container';

import { Layout, LoadingScreen, PageNotFound } from '@global/component';
import { useAuth } from '@global/hook';
import { useRouter } from 'next/router';
import { TouristServices } from '@service';
import { TouristDetail } from '@tourist-detail/container';
import { toast } from 'react-toastify';
import type { NextPageWithLayout } from '../_app';

const HomePage: NextPageWithLayout = () => {
  const { guard, isLoading, isLoggedIn, token } = useAuth();
  const router = useRouter();
  const [dataTourist, setDataTourist] = useState();

  const { getTouristById } = TouristServices(token);

  const fetchTouristById = useCallback(async () => {
    try {
      const res = await getTouristById(String(router?.query?.id));
      setDataTourist(res?.data);
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
      setTimeout(() => {
        router.push('/');
      }, 500);
    }
  }, [getTouristById, router]);

  useEffect(() => {
    guard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (token && router?.query?.id) {
      fetchTouristById();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router?.query?.id, token]);

  if (!isLoading && isLoggedIn) {
    return <TouristDetail data={dataTourist} />;
  }

  if (!isLoading && !isLoggedIn) {
    <PageNotFound />;
  }
  return <LoadingScreen />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Data Cakra - Frontend Test" desc="Test Frontend">
      {page}
    </Layout>
  );
};

export default HomePage;
