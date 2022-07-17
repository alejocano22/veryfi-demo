import Head from 'next/head';
import { getSession } from 'next-auth/react';
import { DashboardScreen } from '@screens';
import { parseCookies } from 'src/components/utils/cookies';
import { useDispatch } from 'react-redux';
import { loadUserSession } from 'src/redux/user/userThunks';

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const cookies = parseCookies(context.req);
  if (!cookies.veryfiSession) {
    return {
        redirect: {
          destination: '/hub/login',
        },
      };
  }
    // console.log(session.user);
    // if (!session) {
    //   
    // }
    return {
      props: {
        veryfiToken: cookies?.veryfiSession || "",
      },
    };
}

export default function Dashboard({ user, veryfiToken }) {
  const dispatch = useDispatch();
  dispatch(loadUserSession({ session: veryfiToken }));
  return (
    <>
      <Head>
        <title>{'Dashboard'}</title>
        <meta name='description' content='Veryfi dashboard' />
      </Head>
      <DashboardScreen user={user} />
    </>
  );
}
