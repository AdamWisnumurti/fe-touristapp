import type { ReactNode } from 'react';
import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { NavBar } from './nav-bar';
import { FooterPengembang } from './footer';

export const Layout = ({
  children,
  title, // meta title
  desc, // meta desc
}: {
  children: ReactNode;
  title?: string;
  desc?: string;
}) => {
  return (
    <div className="bg-neutral-10 text-neutral-800">
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <title>Dashboard - Data Cakra Test</title>
        <meta name="description" content="Data Cakra Test Frontend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel='icon' href='/images/logo-tapera.png' /> */}
      </Head>
      <NextSeo
        title={title}
        description={desc}
        // canonical={canonical}
        openGraph={{
          title,
          description: desc,
        }}
      />
      <NavBar />
      <div className=" min-h-screen bg-neutral-10 text-neutral-800">
        {children}
      </div>
      <FooterPengembang />
    </div>
  );
};

export default Layout;
