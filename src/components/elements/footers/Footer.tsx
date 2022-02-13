import { FooterIcon } from '../icons';
export interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className='flex-1 mt-auto pb-20 bg-gradient-to-r from-purple to-purple-darker max-h-60'>
      <FooterIcon />
      <div className='w-full my-10 flex items-center justify-center'>
        <h1 className='text-xl text-white'>{'Veryfi demo | © 2022'}</h1>
      </div>
    </footer>
  );
};

export default Footer;
