import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Language from '../../utils/language/Language';
import { useSession, signOut } from 'next-auth/react';

export interface NavbarProps {}

const navigation = [
  { name: 'Blogs', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Pricing', href: '#' },
];

export const Navbar = ({}: NavbarProps) => {
  const { push: routerPush, locale } = useRouter();
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);
  return (
    <nav className='fixed w-full z-30 top-0 bg-gradient-to-r from-purple to-purple-darker py-4'>
      <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0'>
        <div
          className='pl-4 flex items-center cursor-pointer space-x-1'
          onClick={() => routerPush('/')}
        >
          <img src='./images/veryfi-logo.png' height={50} width={50}></img>
        </div>
        <div className='block lg:hidden pr-4'>
          <button
            className='flex items-center p-1 hover:text-gray0 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
            onClick={() => setIsMobileMenu(true)}
          >
            <MenuIcon className='text-white w-8 h-8'></MenuIcon>
          </button>
        </div>
        {isMobileMenu ? (
          <div className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden'>
            <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
              <button className='absolute rounded-md p-2 inline-flex justify-end  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 mr-5'>
                <span className='sr-only'>Close main menu</span>
                <XIcon
                  className='h-6 w-6'
                  aria-hidden='true'
                  onClick={() => setIsMobileMenu(false)}
                />
              </button>

              <button
                className='block w-full px-5 py-3 text-center font-medium text-purple-dark bg-gray-50 hover:bg-gray-100'
                onClick={() => {
                  setIsMobileMenu(false);
                  routerPush('/login');
                }}
              >
                Log in
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
        <div
          className='w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20'
          id='nav-content'
        >
          <ul className='list-reset lg:flex justify-end flex-1 items-center'>
            <li className='mr-3'>
              <Language />
            </li>
            <li className='mr-3'>
              <button
                className='inline-block text-white no-underline hover:bg-purple-darker py-2 px-4 border-2 border-white rounded-md'
                onClick={() => signOut()}
              >
                {'Logout'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
