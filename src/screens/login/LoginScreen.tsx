import { useRouter } from 'next/router';
import Language from '../../components/utils/language/Language';
import { i18nLogin } from '../../i18n/login';

export interface LoginScreenProps {}

export default function LoginScreen() {
  const { push: routerPush, locale } = useRouter();
  const { title, go } = i18nLogin[locale];
  return (
    <div className='h-screen flex flex-col items-center justify-center '>
      <h1 className='text-xl mb-5'>{title}</h1>
      <button
        className='border-2 rounded-xl border-green-500 p-4 cursor-pointer hover:bg-green-100'
        onClick={() => routerPush('/')}
      >
        {go}
      </button>
      <Language />
    </div>
  );
}
