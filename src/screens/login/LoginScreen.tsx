import { useRouter } from 'next/router';
import Language from '../../components/utils/language/Language';
import { i18nLogin } from '../../i18n/login';

export interface LoginScreenProps {}

export default function LoginScreen() {
  const { push: routerPush, locale } = useRouter();
  const { title, go } = i18nLogin[locale];
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
            />
          </div>
          <div className='mt-6 flex items-center justify-between'></div>
          <div className='mt-6'>
            <button className='w-full inline-flex items-center justify-center px-4 py-2 bg-purple-900 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-purple-700 active:bg-purple-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition'>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
