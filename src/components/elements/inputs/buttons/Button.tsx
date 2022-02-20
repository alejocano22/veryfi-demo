import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { BallTriangle } from 'react-loader-spinner';

export interface ButtonProps {
  id?: string;
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'button';
  variant?: 'default' | 'action';
  icon?: 'burger' | 'x';
  iconColor?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconAdditionalCss?: string;
  textColor?: string;
  backgroundColor?: string;
  disabled?: boolean;
  isLoading?: boolean;

  additionalCss?: string;
}

const Button = ({
  id,
  text,
  onClick,
  type,
  variant,
  icon,
  iconColor,
  iconHeight,
  iconWidth,
  iconAdditionalCss,
  textColor,
  backgroundColor,
  disabled,
  isLoading,
  additionalCss,
}: ButtonProps) => {
  const buttonVariants = (variant: string) => {
    switch (variant) {
      case 'action':
        return `mx-auto lg:mx-0 hover:underline font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`;
      default:
      case 'default':
        return `focus:shadow-outline`;
    }
  };

  const buttonIcons = (icon: string) => {
    switch (icon) {
      case 'burger':
        return (
          <MenuIcon
            color={iconColor ? iconColor : 'black'}
            height={iconHeight ? iconHeight : 25}
            width={iconWidth ? iconWidth : 25}
            className={iconAdditionalCss}
          />
        );
      case 'x':
        return (
          <XIcon
            color={iconColor ? iconColor : 'black'}
            height={iconHeight ? iconHeight : 25}
            width={iconWidth ? iconWidth : 25}
            className={iconAdditionalCss}
          />
        );
      default:
        return '';
    }
  };

  const isDisabled = (disabled: boolean) => {
    if (disabled) {
      return 'disabled:opacity-75 cursor-default';
    }
    return '';
  };

  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={[
        backgroundColor ? backgroundColor : 'bg-white',
        textColor ? textColor : 'text-black',
        'focus:outline-none',
        buttonVariants(variant),
        additionalCss,
        isDisabled(disabled),
      ].join(' ')}
    >
      {icon && !isLoading ? buttonIcons(icon) : ''}
      {isLoading ? (
        <BallTriangle
          height='20'
          width='20'
          color={iconColor}
          ariaLabel='loading'
        />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
