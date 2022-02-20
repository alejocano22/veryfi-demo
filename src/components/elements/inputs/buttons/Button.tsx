export interface ButtonProps {
  id?: string;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'action' | 'primary' | 'secondary';
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
  textColor,
  backgroundColor,
  additionalCss,
  disabled,
}: ButtonProps) => {
  const buttonVariants = (variant: string) => {
    switch (variant) {
      default:
      case 'action':
        return `mx-auto lg:mx-0 hover:underline ${
          backgroundColor ? backgroundColor : 'bg-white'
        } ${
          textColor ? textColor : 'text-black'
        } font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`;
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
      {text}
    </button>
  );
};

export default Button;
