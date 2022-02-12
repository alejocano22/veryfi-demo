import Head from 'next/head';
import DashboardScreen from '../../screens/dashboard/DashboardScreen';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name='description' content='Veryfi dashboard' />
      </Head>
      <DashboardScreen />
    </>
  );
}
