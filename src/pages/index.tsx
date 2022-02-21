import Head from 'next/head';
import { HomeScreen } from '@screens';

export default function Home() {
  return (
    <>
      <div className='h-full w-full flex flex-col'>
        <Head>
          <title>Veryfi</title>
          <meta name='description' content='Veryfi homepage' />
        </Head>
        <HomeScreen />
      </div>
    </>
  );
}
