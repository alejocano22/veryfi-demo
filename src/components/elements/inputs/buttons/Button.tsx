import { MenuIcon, XIcon } from '@heroicons/react/outline';

export interface ButtonProps {
  id?: string;
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'default' | 'action' | 'primary' | 'secondary';
  icon?: 'burger' | 'x';
  iconColor?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconAdditionalCss?: string;
  textColor?: string;
  backgroundColor?: string;
  disabled?: boolean;
  type?: 'submit' | 'button';
  additionalCss?: string;
}

const Button = ({
  id,
  text,
  onClick,
  variant,
  icon,
  iconColor,
  iconHeight,
  iconWidth,
  iconAdditionalCss,
  textColor,
  backgroundColor,
  additionalCss,
  disabled,
}: ButtonProps) => {
  const buttonVariants = (variant: string) => {
    switch (variant) {
      default:
      case 'default':
        return ` ${backgroundColor ? backgroundColor : 'bg-white'} ${
          textColor ? textColor : 'text-black'
        } focus:outline-none focus:shadow-outline`;

      case 'action':
        return `mx-auto lg:mx-0 hover:underline ${
          backgroundColor ? backgroundColor : 'bg-white'
        } ${
          textColor ? textColor : 'text-black'
        } font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`;
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
      return 'opacity-50';
    }
    return '';
  };

  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={[
        'focus:outline-none',
        buttonVariants(variant),
        additionalCss,
        isDisabled(disabled),
      ].join(' ')}
    >
      {buttonIcons(icon)}
      {text}
    </button>
  );
};

export default Button;
