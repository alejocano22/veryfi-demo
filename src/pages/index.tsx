import Head from 'next/head';
import HomeScreen from '../screens/home/HomeScreen';

export default function Home() {
  return (
    <>
      <div className='h-screen w-full'>
        <Head>
          <title>Veryfi</title>
          <meta name='description' content='Veryfi homepage' />
        </Head>
        <HomeScreen />
      </div>
    </>
  );
}
