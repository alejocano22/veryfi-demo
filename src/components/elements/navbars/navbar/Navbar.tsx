import { useRouter } from 'next/router';
import { useState } from 'react';
import { Language } from '@language';
import { signOut } from 'next-auth/react';
import { Title } from '@texts';
import { Button } from '@inputs';
import { i18nCommon } from '@i18n';
import { MobileMenu } from '@navbars';
import { getNavbarNavigation } from '@components/utils';

export interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  const { push: routerPush, locale } = useRouter();
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);
  const { logout } = i18nCommon[locale];
  const navigation = getNavbarNavigation(locale);

  return (
    <nav className='fixed w-full z-30 top-0 bg-white py-4 border-b-2 border-purple-darker'>
      <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0'>
        <div className='pl-4 flex items-center space-x-1'>
          <img src='/images/veryfi-logo.png' height={50} width={50}></img>
        </div>
        <Title
          text={'Dashboard'}
          variant='h2'
          color='text-purple-dark'
          additionalCss='lg:ml-24'
        />
        <div className='block lg:hidden pr-4'>
          <Button
            variant='default'
            type='button'
            icon='burger'
            backgroundColor='bg-transparent'
            additionalCss='flex items-center p-1 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
            iconColor='purple-darker'
            iconHeight={32}
            iconWidth={32}
            onClick={() => setIsMobileMenu(true)}
          />
        </div>
        <MobileMenu
          navigation={navigation}
          isMobileMenu={isMobileMenu}
          setIsMobileMenu={setIsMobileMenu}
          isLogin={false}
        />
        <div
          className='w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20'
          id='nav-content'
        >
          <ul className='list-reset lg:flex justify-end flex-1 items-center'>
            <li className='mr-3'>
              <Language
                iconColor='purple-darker'
                textColor='purple-darker'
                textHoverColor='text-purple-light'
                additionalCss='m-2 justify-end'
              />
            </li>
            <li className='mr-3'>
              {/* <Button
                id='navbar-logout-button'
                variant='default'
                text={logout}
                textColor='text-purple-darker'
                type='button'
                backgroundColor='bg-transparent'
                additionalCss='no-underline hover:bg-gray-lighter py-2 px-4 border-2 border-purple-darker rounded-md'
                onClick={() => signOut()}
              /> */}
              <Button
                id='navbar-redirect-button'
                variant='default'
                text={'Go back!'}
                textColor='text-purple-darker'
                type='button'
                backgroundColor='bg-transparent'
                additionalCss='no-underline hover:bg-red-lighter py-2 px-4 border-2 border-purple-darker rounded-md ml-4'
                onClick={() => routerPush('/hub')}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
