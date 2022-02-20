import Link from 'next/link';
import { useRouter } from 'next/router';
import { GlobeAltIcon } from '@heroicons/react/outline';

export interface LanguageProps {}

export default function Language() {
  const { locale, asPath } = useRouter();

  return (
    <div className='flex items-center px-3 '>
      <GlobeAltIcon className='mr-1 ' height={20} width={20} color='white' />
      <Link href={asPath} locale={locale === 'en' ? 'es' : 'en'}>
        <a className='text-white hover:text-gray-light'>
          {locale === 'en' ? 'EN' : 'ES'}
        </a>
      </Link>
    </div>
  );
}
