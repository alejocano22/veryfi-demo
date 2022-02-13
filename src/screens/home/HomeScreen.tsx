import { useRouter } from 'next/router';
import i18nHome from '../../i18n/home';
import Footer from '../../components/elements/footers/Footer';
import MainNavbar from '../../components/elements/navbar/MainNavbar';
import Title from '../../components/elements/text/Title/Title';
import { HomepageIcon } from '../../components/elements/icons';

export interface HomeScreenProps {}

export default function HomeScreen() {
  const { push: routerPush, locale } = useRouter();
  const { title, go } = i18nHome[locale];

  return (
    <>
      <MainNavbar />

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
        <HomepageIcon></HomepageIcon>
      </div>
      <Title text='Section A' />
      <div className='h-36 border-2 border-dashed border-purple-light m-5'></div>
      <Title text='Section B' />
      <div className='h-36 border-2 border-dashed border-purple-light m-5'></div>
      <Title text='Section C' />
      <div className='h-36 border-2 border-dashed border-purple-light m-5'></div>
      <Footer />
    </>
  );
}
