import { useState } from 'react';
import { useRouter } from 'next/router';
import { i18nCommon } from '@i18n';
import { Language } from '@language';
import { Button } from '@inputs';
import { MobileMenu } from '@navbars';

export interface MainNavbarProps {}

export const MainNavbar = ({}: MainNavbarProps) => {
  const { push: routerPush, pathname, locale } = useRouter();
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);
  const { productsNavbar, pricingNavbar, resourcesNavbar, login } =
    i18nCommon[locale];
  const navigation = [
    { name: productsNavbar, href: '#' },
    { name: pricingNavbar, href: '#' },
    { name: resourcesNavbar, href: '#' },
  ];

  return (
    <nav className='fixed w-full z-30 top-0 bg-gradient-to-r from-purple to-purple-darker py-4'>
      <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0'>
        <div
          className='pl-4 flex items-center cursor-pointer space-x-1'
          onClick={() => routerPush('/')}
        >
          <img src='/images/veryfi-logo.png' height={50} width={50}></img>
        </div>
        <div className='block lg:hidden pr-4'>
          <Button
            variant='default'
            type='button'
            icon='burger'
            backgroundColor='bg-transparent'
            additionalCss='flex items-center p-1 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
            iconColor='white'
            iconHeight={32}
            iconWidth={32}
            onClick={() => setIsMobileMenu(true)}
          />
        </div>
        <MobileMenu
          navigation={navigation}
          isMobileMenu={isMobileMenu}
          setIsMobileMenu={setIsMobileMenu}
        />
        <div
          className='w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20'
          id='nav-content'
        >
          <ul className='list-reset lg:flex justify-end flex-1 items-center'>
            {navigation.map((item) => (
              <li key={item.name} className='mr-3'>
                <a
                  className='inline-block text-white no-underline hover:text-gray-light py-2 px-4'
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className='mr-3'>
              <Language />
            </li>
            {pathname !== '/login' ? (
              <li className='mr-3'>
                <Button
                  variant='default'
                  text={login}
                  textColor='text-white'
                  type='button'
                  backgroundColor='bg-transparent'
                  additionalCss='no-underline hover:bg-purple-darker py-2 px-4 border-2 border-white rounded-md'
                  onClick={() => routerPush('/login')}
                />
              </li>
            ) : (
              ''
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
