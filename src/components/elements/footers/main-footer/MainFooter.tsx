import { useRouter } from 'next/router';
import { FooterIcon } from '@icons';
import { i18nCommon } from '@i18n';

export interface MainFooterProps {}

export const MainFooter = ({}: MainFooterProps) => {
  const { locale } = useRouter();
  const { footer } = i18nCommon[locale];
  return (
    <footer className='flex-1 mt-auto pb-20 bg-gradient-to-r from-purple to-purple-darker max-h-60'>
      <FooterIcon />
      <div className='w-full mb-10 flex items-center justify-center'>
        <h1 className='text-xl text-white'>{footer}</h1>
      </div>
    </footer>
  );
};

export default MainFooter;
