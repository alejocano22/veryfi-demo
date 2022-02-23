import { ChevronDownIcon } from '@heroicons/react/outline';
import { useState } from 'react';

export interface DropdownProps {
  id?: string;
  isOpened?: boolean;
  setIsOpened?: any;
  defaultOption: number;
  options: string[];
  setOption: any;
  name?: string;
  additionalCss?: string;
}

const Dropdown = ({
  id,
  isOpened,
  setIsOpened,
  defaultOption,
  options,
  setOption,
  additionalCss,
}: DropdownProps) => {
  return (
    <div id={id} className={['flex flex-col', additionalCss].join(' ')}>
      <button
        id={`${id}-button`}
        className='flex gap-2 w-28 lg:w-52 text-purple-darker bg-white border border-gray-light rounded-md py-1 px-2 items-center text-xs lg:text-base'
        type='button'
        onClick={() => setIsOpened(!isOpened)}
      >
        {options[defaultOption]}
        <ChevronDownIcon width={15} className='ml-auto mr-1' />
      </button>
      <div
        id={`${id}-dropdown`}
        className={`${
          isOpened ? 'flex flex-col' : 'hidden'
        } absolute mt-8 lg:mt-10 z-10 w-24 lg:w-52 bg-white rounded shadow border border-gray-light`}
      >
        {options.map((option, index) => (
          <a
            key={option}
            onClick={() => {
              setOption(index);
              setIsOpened(false);
            }}
            className='w-full py-1 lg:py-2 px-2 lg:px-4 text-xs lg:text-base hover:bg-gray-lighter cursor-pointer'
          >
            {option}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
