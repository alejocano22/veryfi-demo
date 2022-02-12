import Head from 'next/head';
import '../styles/globals.css';

export function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
