import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

export interface TextFieldProps {
  id?: string;
  type?: string;
  name?: string;
  label?: string;
  hideLabel?: boolean;
  placeholder?: string;
  required?: boolean;
  register?: any;
  additionalCss?: string;
}

const TextField = ({
  id,
  type,
  name,
  required,
  placeholder,
  label,
  hideLabel,
  register,
  additionalCss,
}: TextFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className='mb-6'>
      <label
        htmlFor={name}
        className={[hideLabel && 'sr-only', 'block mb-1'].join(' ')}
      >
        {label}
      </label>
      <div className='relative flex justify-end'>
        <input
          required={required}
          placeholder={placeholder}
          id={id}
          type={type === 'password' && isPasswordVisible ? 'text' : type}
          name={name}
          {...register(name)}
          className={[
            'py-2 px-3 border border-gray focus:outline-none rounded-md shadow-sm block w-full',
            additionalCss,
          ].join(' ')}
        />
        {type === 'password' && !isPasswordVisible && (
          <EyeIcon
            id={`${id}-eye`}
            color='gray'
            height={25}
            className='absolute mt-2 z-50 mr-2'
            onClick={() => setIsPasswordVisible(true)}
          />
        )}
        {type === 'password' && isPasswordVisible && (
          <EyeOffIcon
            id={`${id}-eye-off`}
            color='gray'
            height={25}
            className='absolute mt-2 z-50 mr-2'
            onClick={() => setIsPasswordVisible(false)}
          />
        )}
      </div>
    </div>
  );
};

export default TextField;
