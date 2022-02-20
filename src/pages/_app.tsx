import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { wrapper } from '@redux/store';
import '../styles/globals.css';

export function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <link rel='icon' href='/images/favicon.ico' />
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default wrapper.withRedux(App);
