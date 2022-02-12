import Head from 'next/head';
import LoginScreen from '../../screens/login/LoginScreen';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name='description' content='Veryfi login' />
      </Head>
      <LoginScreen />
    </>
  );
}
