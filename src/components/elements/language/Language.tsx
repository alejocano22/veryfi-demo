import Link from 'next/link';
import { useRouter } from 'next/router';
import { GlobeAltIcon } from '@heroicons/react/outline';

export interface LanguageProps {
  iconColor?: string;
  textColor?: string;
  textHoverColor?: string;
  additionalCss?: string;
}

export default function Language({
  iconColor,
  textColor,
  textHoverColor,
  additionalCss,
}: LanguageProps) {
  const { locale, asPath } = useRouter();

  return (
    <div className={['flex items-center px-3 ', additionalCss].join(' ')}>
      <GlobeAltIcon
        className='mr-1 '
        height={20}
        width={20}
        color={iconColor ? iconColor : 'white'}
      />
      <Link href={asPath} locale={locale === 'en' ? 'es' : 'en'}>
        <a
          className={`${textColor ? textColor : 'text-white'} 
          hover:${textHoverColor ? textHoverColor : 'text-gray-light'}`}
        >
          {locale === 'en' ? 'EN' : 'ES'}
        </a>
      </Link>
    </div>
  );
}
