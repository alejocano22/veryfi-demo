import { useRouter } from 'next/router';
import Language from '../../components/utils/language/Language';
import i18nHome from '../../i18n/home';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Footer from '../../components/elements/footers/Footer';
import MainNavbar from '../../components/elements/navbar/MainNavbar';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Company', href: '#' },
];
export interface HomeScreenProps {}

export default function HomeScreen() {
  const { push: routerPush, locale } = useRouter();
  const { title, go } = i18nHome[locale];

  return (
    <>
      <MainNavbar />
      {/* <div className='relative bg-white overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
            <Popover>
              <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
                <nav
                  className='relative flex items-center justify-between sm:h-10 lg:justify-start'
                  aria-label='Global'
                >
                  <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                    <div className='flex items-center justify-between w-full md:w-auto'>
                      <a href='#'>
                        <span className='sr-only'>Workflow</span>
                        <img
                          className='h-8 w-auto sm:h-10'
                          src='/images/veryfi-log.png'
                        />
                      </a>
                      <div className='-mr-2 flex items-center md:hidden'>
                        <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                          <span className='sr-only'>Open main menu</span>
                          <MenuIcon className='h-6 w-6' aria-hidden='true' />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='font-medium text-gray-500 hover:text-gray-900'
                      >
                        {item.name}
                      </a>
                    ))}
                    <button
                      onClick={() => routerPush('/login')}
                      className='font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      Log in
                    </button>
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter='duration-150 ease-out'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='duration-100 ease-in'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Popover.Panel
                  focus
                  className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
                >
                  <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                    <div className='px-5 pt-4 flex items-center justify-between'>
                      <div>
                        <img
                          className='h-8 w-auto'
                          src='/images/veryfi-log.png'
                          alt=''
                        />
                      </div>
                      <div className='-mr-2'>
                        <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                          <span className='sr-only'>Close main menu</span>
                          <XIcon className='h-6 w-6' aria-hidden='true' />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className='px-2 pt-2 pb-3 space-y-1'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                        >
                          {item.name}
                        </a>
                      ))}
                      <Language />
                    </div>
                    <button
                      className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100'
                      onClick={() => routerPush('/login')}
                    >
                      Log in
                    </button>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div className='sm:text-center lg:text-left'>
                <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                  <span className='block xl:inline'>Data to enrich your</span>{' '}
                  <span className='block text-indigo-600 xl:inline'>
                    online business
                  </span>
                </h1>
                <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                  <div className='rounded-md shadow'>
                    <a
                      href='#'
                      className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
                    >
                      Get started
                    </a>
                  </div>

                  <div className='mt-3 sm:mt-0 sm:ml-3'>
                    <a
                      href='#'
                      className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'
                    >
                      Live demo
                    </a>
                  </div>
                  <Language />
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <img
            className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
            src='/images/home.png'
            alt=''
          />
        </div>
      </div> */}
      <div className='h-full pt-24 bg-gradient-to-r from-purple to-purple-darker'>
        <div className='container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center'>
          {/* <!--Left Col--> */}
          <div className='flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left'>
            <p className='uppercase tracking-loose w-full text-white'>
              What business are you?
            </p>
            <h1 className='my-4 text-5xl font-bold leading-tight text-white'>
              Turn Unstructured Documents into Structured Data in Seconds
            </h1>
            <p className='leading-normal text-2xl mb-8 text-white'>
              OCR APIs and Mobile SDKs to securely capture, extract, categorize
              and transform bills, invoices, receipts (SKUs), W2s, into
              standardized JSON with Level 3 data giving your app and customers
              superpowers.
            </p>
            <button className='mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
              Subscribe
            </button>
          </div>
          {/* <!--Right Col--> */}
          <div className='w-full md:w-3/5 py-6 z-20 text-center'>
            <img className='w-full md:w-4/5' src='./images/landing.png' />
          </div>
        </div>
      </div>
      <div className='-mt-12 lg:-mt-24 bg-gradient-to-r from-purple to-purple-darker'>
        <svg
          viewBox='0 0 1428 174'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
            <g
              transform='translate(-2.000000, 44.000000)'
              fill='#FFF'
              fill-rule='nonzero'
            >
              <path
                d='M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496'
                opacity='0.100000001'
              ></path>
              <path
                d='M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z'
                opacity='0.100000001'
              ></path>
              <path
                d='M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z'
                id='Path-4'
                opacity='0.200000003'
              ></path>
            </g>
            <g
              transform='translate(-4.000000, 76.000000)'
              fill='#FFFFFF'
              fill-rule='nonzero'
            >
              <path d='M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z'></path>
            </g>
          </g>
        </svg>
      </div>
      <div className='h-36 border-2 border-dashed border-purple-light m-5'></div>
      <div className='h-36 border-2 border-dashed border-purple-light m-5'></div>
      <div className='h-36 border-2 border-dashed border-purple-light m-5'></div>
      <Footer />
    </>
  );
}
