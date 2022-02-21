import Head from 'next/head';
import { getCsrfToken, getSession } from 'next-auth/react';
import { LoginScreen } from '@screens';

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
      },
    };
  } else {
    return {
      props: {
        session: null,
        csrfToken: (await getCsrfToken(context)) || null,
      },
    };
  }
}

export default function Login({ csrfToken }) {
  return (
    <div className='h-screen w-full flex flex-col'>
      <Head>
        <title>{'Login'}</title>
        <meta name='description' content='Veryfi login' />
      </Head>
      <LoginScreen csrfToken={csrfToken} />
    </div>
  );
}
