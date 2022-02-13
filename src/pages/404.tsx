import React from 'react';
import Head from 'next/head';
import NotFoundError from '../screens/error-pages/NotFoundErrorScreen';

export default function NotFoundErrorPage() {
  return (
    <>
      <Head>
        <title>Verify 404</title>
        <meta name='description' content='Verify 404 error' />
      </Head>
      <NotFoundError />
    </>
  );
}
