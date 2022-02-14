import { getSession } from 'next-auth/react';
import Head from 'next/head';
import DashboardScreen from '../../screens/dashboard/DashboardScreen';

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }
  return {
    props: {
      user: session.user,
    },
  };
}

export default function Dashboard({ user }) {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name='description' content='Veryfi dashboard' />
      </Head>
      <DashboardScreen user={user} />
    </>
  );
}
