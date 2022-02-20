export interface TitleProps {
  id?: string;
  text: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  size?: string;
  additionalCss?: string;
}

const Title = ({
  id,
  text,
  variant,
  color,
  size,
  additionalCss,
}: TitleProps) => {
  const titleVariants = (variant: string) => {
    switch (variant) {
      default:
      case 'h1':
        return (
          <h1
            id={id}
            className={[
              color ? color : 'text-black',
              size ? size : 'text-5xl',
              additionalCss,
            ].join(' ')}
          >
            {text}
          </h1>
        );
      case 'h2':
        return (
          <h2
            id={id}
            className={[
              color ? color : 'text-black',
              size ? size : 'text-2xl',
              additionalCss,
            ].join(' ')}
          >
            {text}
          </h2>
        );
      case 'h3':
        return (
          <h3
            id={id}
            className={[
              color ? color : 'text-black',
              size ? size : 'text-xl',
              additionalCss,
              'font-heading',
            ].join(' ')}
          >
            {text}
          </h3>
        );
      case 'h4':
        return (
          <h4
            id={id}
            className={[
              color ? color : 'text-black',
              size ? size : 'text-lg',
              additionalCss,
            ].join(' ')}
          >
            {text}
          </h4>
        );
      case 'h5':
        return (
          <h5
            id={id}
            className={[
              color ? color : 'text-black',
              size ? size : 'text-base',
              additionalCss,
            ].join(' ')}
          >
            {text}
          </h5>
        );
      case 'h6':
        return (
          <h6
            id={id}
            className={[
              color ? color : 'text-black',
              size ? size : 'text-sm',
              additionalCss,
            ].join(' ')}
          >
            {text}
          </h6>
        );
    }
  };

  return titleVariants(variant);
};

export default Title;
