import { useRouter } from 'next/router';
import Language from '../../components/utils/language/Language';
import i18nHome from '../../i18n/home';

export interface HomeScreenProps {}

export default function HomeScreen() {
  const { push: routerPush, locale } = useRouter();
  const { title, go } = i18nHome[locale];

  return (
    <div className='h-screen flex flex-col items-center justify-center '>
      <h1 className='text-xl mb-5'>{title}</h1>
      <button
        className='border-2 rounded-xl border-red-500 p-4 cursor-pointer hover:bg-red-100'
        onClick={() => routerPush('/login')}
      >
        {go}
      </button>
      <Language />
    </div>
  );
}
