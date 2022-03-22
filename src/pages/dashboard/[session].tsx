import Head from 'next/head';
// import { getSession } from 'next-auth/react';
import { DashboardScreen } from '@screens';
import { useDispatch } from 'react-redux';
import { loadUserSession } from 'src/redux/user/userThunks';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });
const session = context.params.session;
//   if (session) {

    
    console.log('Session token: ', session);  
    Cookie.set('veryfiSession', session);
    return {
      props: {
        veryfiToken: session,
        },
        
    //     redirect: {
    //     destination: '/dashboard',
    //   },
    };
//   } else {
//     return {
//       props: {
//         user: session.user,
//       },
//     };
//   }
}

export default function Dashboard({ user, veryfiToken }) {
//   const dispatch = useDispatch();
//   dispatch(loadUserSession({ session: veryfiToken }));
  Cookie.set('veryfiSession', veryfiToken);
   
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
