import { useRouter } from 'next/router';
import { i18nLogin } from '../../i18n/login';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { useState } from 'react';

export interface LoginScreenProps {
  csrfToken: any;
  providers: any;
}

export default function LoginScreen({
  csrfToken,
  providers,
}: LoginScreenProps) {
  const [email, setEmail] = useState<string>('alejocano22@hotmail.com');
  const [loader, setLoader] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('Veryfitest123*');
  const { push: routerPush, locale } = useRouter();
  const { title, go } = i18nLogin[locale];

  const manageLogin = async (type: string, providerId?: string) => {
    setLoader(true);
    await signIn('credentials', {
      username: email,
      password: password,
    });
    setLoader(false);
  };
  return (
    <div className='w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0'>
      <div className='w-full sm:max-w-md p-5 mx-auto'>
        <h2 className='mb-12 text-center text-5xl font-extrabold'>Welcome.</h2>
        <form>
          <div className='mb-4'>
            <label className='block mb-1' id='email'>
              Email
            </label>
            <input
              id='email'
              type='text'
              name='email'
              className='py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-1' id='password'>
              Password
            </label>
            <input
              id='password'
              type='password'
              name='password'
              className='py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='mt-6 flex items-center justify-between'></div>
          <div className='mt-6'>
            <div
              className='w-full inline-flex items-center justify-center px-4 py-2 bg-purple-900 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-purple-700 active:bg-purple-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition cursor-pointer'
              onClick={() => manageLogin('credentials')}
            >
              Sign In
            </div>
            {loader ? (
              <div>
                <h1>{'Loading...'}</h1>
              </div>
            ) : (
              ''
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
