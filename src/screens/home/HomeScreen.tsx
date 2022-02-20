import { useRouter } from 'next/router';
import { MainFooter } from '@footers';
import { HomepageIcon } from '@icons';
import { i18nHome } from '@i18n';
import { Button } from '@inputs';
import { Paragraph, Title } from '@texts';
import { MainNavbar } from '@navbars';

export interface HomeScreenProps {}

export default function HomeScreen() {
  const { push: routerPush, locale } = useRouter();
  const { title, subtitle, startButton, sectionA, sectionB, sectionC } =
    i18nHome[locale];

  return (
    <>
      <MainNavbar />
      <div className='h-full pt-24 bg-gradient-to-r from-purple to-purple-darker'>
        <div className='container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center'>
          <div className='flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left'>
            <Title
              text={title}
              color='text-white'
              additionalCss='my-4 font-bold leading-tight'
            />
            <Paragraph
              text={subtitle}
              size='text-2xl'
              color='text-white'
              additionalCss='leading-normal mb-8'
            />
            <Button text={startButton} onClick={() => routerPush('/login')} />
          </div>

          <div className='w-full md:w-3/5 py-6 z-20 text-center'>
            <img className='w-full md:w-4/5' src='/images/landing.png' />
          </div>
        </div>
      </div>
      <div className='-mt-12 lg:-mt-24 bg-gradient-to-r from-purple to-purple-darker'>
        <HomepageIcon />
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <Title
          text={sectionA}
          variant='h1'
          color='text-purple-dark'
          additionalCss='font-bold'
        />
        <div className='h-36 w-4/5 grow border-2 border-dashed border-purple-light m-5' />
        <Title
          text={sectionB}
          variant='h1'
          color='text-purple-dark'
          additionalCss='font-bold'
        />
        <div className='h-36 w-4/5 grow border-2 border-dashed border-purple-light m-5' />
        <Title
          text={sectionC}
          variant='h1'
          color='text-purple-dark'
          additionalCss='font-bold'
        />
        <div className='h-36 w-4/5 grow border-2 border-dashed border-purple-light m-5' />
      </div>
      <MainFooter />
    </>
  );
}
