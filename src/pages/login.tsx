import type { ReactElement } from 'react';
import React from 'react';
import { Layout } from '@global/component';
import { AdminLogin } from '@admin-login/container';
import type { NextPageWithLayout } from './_app';

const ParticipantLoginPage: NextPageWithLayout = () => {
  // const { guard, isLoading } = useAuth();

  // useEffect(() => {
  // guard();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // if (!isLoading) {
  return <AdminLogin />;
  // }

  // return <LoadingScreen />;
};

ParticipantLoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Data Cakra - Frontend Test" desc="Test Frontend">
      {page}
    </Layout>
  );
};

export default ParticipantLoginPage;
