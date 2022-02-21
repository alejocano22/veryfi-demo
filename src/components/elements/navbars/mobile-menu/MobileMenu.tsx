import { Dispatch, SetStateAction } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Language } from '@language';
import { Button } from '@inputs';
import { i18nCommon } from '@i18n';

interface navigation {
  name: string;
  href: string;
}

export interface MobileMenuProps {
  navigation: navigation[];
  isMobileMenu: boolean;
  setIsMobileMenu: Dispatch<SetStateAction<boolean>>;
  isLogin: boolean;
}

export const MobileMenu = ({
  navigation,
  isMobileMenu,
  setIsMobileMenu,
  isLogin,
}: MobileMenuProps) => {
  const { push: routerPush, locale } = useRouter();
  const { logout, login } = i18nCommon[locale];

  return isMobileMenu ? (
    <div className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden'>
      <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
        <Button
          variant='default'
          type='button'
          icon='x'
          backgroundColor='bg-transparent'
          additionalCss='absolute rounded-md p-2 focus:outline-none'
          iconColor='purple-darker'
          iconHeight={24}
          iconWidth={24}
          onClick={() => setIsMobileMenu(false)}
        />
        <Language
          iconColor='purple-darker'
          textColor='purple-darker'
          textHoverColor='text-purple-light'
          additionalCss='m-2 justify-end'
        />
        <div className='px-2 pt-2 pb-3 space-y-1'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='block w-full px-5 py-1 text-center font-medium text-purple-darker hover:text-purple-light'
            >
              {item.name}
            </a>
          ))}
        </div>
        {isLogin ? (
          <Button
            variant='default'
            text={login}
            textColor='text-purple-dark'
            type='button'
            backgroundColor='bg-transparent'
            additionalCss='block w-full px-5 py-3 text-center font-medium text-purple-dark hover:text-purple-light'
            onClick={() => {
              setIsMobileMenu(false);
              routerPush('/login');
            }}
          />
        ) : (
          <Button
            variant='default'
            text={logout}
            textColor='text-purple-dark'
            type='button'
            backgroundColor='bg-transparent'
            additionalCss='block w-full px-5 py-3 text-center font-medium text-purple-dark hover:text-purple-light'
            onClick={() => {
              setIsMobileMenu(false);
              signOut();
            }}
          />
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default MobileMenu;
