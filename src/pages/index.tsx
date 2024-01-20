import type { ReactElement } from 'react';
import React, { useEffect } from 'react';
import { AdminDashboard } from '@admin-dashboard/container';
// import { Home } from '@beranda/container';

import { Layout, LoadingScreen, PageNotFound } from '@global/component';
import { useAuth } from '@global/hook';
import type { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  const { guard, isLoading, isLoggedIn } = useAuth();

  useEffect(() => {
    guard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLoading && isLoggedIn) {
    return <AdminDashboard />;
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
