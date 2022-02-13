import Link from 'next/link';
import { useRouter } from 'next/router';
import { i18nLogin } from '../../../i18n/login';

export interface LanguageProps {}

export default function Language() {
  const { locale, asPath } = useRouter();
  const { title } = i18nLogin[locale];
  return (
    <>
      {locale === 'en' ? (
        <Link href={asPath} locale={'es'}>
          <a className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
            {'ES'}
          </a>
        </Link>
      ) : (
        <Link href={asPath} locale={'en'}>
          <a className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
            {'EN'}
          </a>
        </Link>
      )}
    </>
  );
}
