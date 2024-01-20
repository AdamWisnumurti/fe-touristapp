import Head from 'next/head';
import { NextSeo } from 'next-seo';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

export const Meta = (props: IMetaProps) => (
  <>
    <Head>
      <meta charSet="UTF-8" key="charset" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1"
        key="viewport"
      />
      <title>Profile - Data Cakra Test</title>
      <meta name="description" content="Data Cakra Test Frontend" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/logo-tapera.png" />
    </Head>
    <NextSeo
      title={props.title}
      description={props.description}
      canonical={props.canonical}
      openGraph={{
        title: props.title,
        description: props.description,
        url: props.canonical,
        // locale: AppConfig.locale,
        // site_name: AppConfig.site_name,
      }}
    />
  </>
);
