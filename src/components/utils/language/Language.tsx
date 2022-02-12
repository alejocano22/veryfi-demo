import Link from 'next/link';
import { useRouter } from 'next/router';
import { i18nLogin } from '../../../i18n/login';

export interface LanguageProps {}

export default function Language() {
  const { locale, asPath } = useRouter();
  const { title } = i18nLogin[locale];
  return (
    <div className='flex flex-col items-center justify-center'>
      {locale === 'en' ? (
        <Link href={asPath} locale={'es'}>
          <a className='border-2 rounded-xl border-red-500 p-4 cursor-pointer hover:bg-red-100'>
            {'ES'}
          </a>
        </Link>
      ) : (
        <Link href={asPath} locale={'en'}>
          <a className='border-2 rounded-xl border-red-500 p-4 cursor-pointer hover:bg-red-100'>
            {'EN'}
          </a>
        </Link>
      )}
    </div>
  );
}
