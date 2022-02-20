import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { MainFooter } from '@footers';
import { i18nLogin, i18nCommon } from '@i18n';
import { Button, TextField } from '@inputs';
import { MainNavbar } from '@navbars';
import { Title } from '@texts';
import { useForm } from 'react-hook-form';

export interface LoginScreenProps {
  csrfToken: any;
}

export const LoginScreen = ({ csrfToken }: LoginScreenProps) => {
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { push: routerPush, locale } = useRouter();
  const { register, getValues, handleSubmit } = useForm({
    mode: 'onSubmit',
  });
  const { welcome, emailLabel, passwordLabel, errorMessage } =
    i18nLogin[locale];
  const { login } = i18nCommon[locale];

  const removeError = () => {
    setTimeout(() => {
      setError(false);
    }, 4000);
  };

  const manageLogin = async () => {
    console.log('here');
    setLoader(true);
    await signIn('credentials', {
      username: getValues('email'),
      password: getValues('password'),
      redirect: false,
    }).then((result) => {
      if (result.error) {
        setLoader(false);
        setError(true);
        removeError();
      } else {
        routerPush('/dashboard');
      }
    });
  };
  return (
    <>
      <MainNavbar />
      <div className='mt-52 w-auto bg-gray-50 flex flex-col justify-center items-center pt-6 sm:pt-0'>
        <div className='w-full sm:max-w-md p-5 mx-auto'>
          <Title
            variant='h1'
            text={welcome}
            additionalCss='mb-12 text-center font-extrabold'
          />
          <form className='mt-8' onSubmit={handleSubmit(() => manageLogin())}>
            <input type='hidden' value={csrfToken} required />
            <TextField
              id='email'
              name='email'
              type='email'
              placeholder='smith@email.com'
              label={emailLabel}
              register={register}
            />
            <TextField
              id='password'
              name='password'
              type='password'
              placeholder='********'
              label={passwordLabel}
              register={register}
            />
            <Button
              text={login}
              textColor='text-white'
              backgroundColor='bg-purple'
              additionalCss='w-full inline-flex items-center justify-center px-4 py-2 bg-purple-dark border border-transparent rounded-md font-semibold capitalize hover:bg-purple active:bg-purple focus:outline-none focus:border-purple focus:ring focus:ring-purple disabled:opacity-25 transition cursor-pointer mt-7'
              onClick={() => manageLogin()}
              iconColor='white'
              isLoading={loader}
              disabled={loader}
            />
            {error ? (
              <div className='flex justify-center'>
                <h1 className='text-red'>{errorMessage}</h1>
              </div>
            ) : (
              ''
            )}
          </form>
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default LoginScreen;
