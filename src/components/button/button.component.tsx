import type { ButtonHTMLAttributes, FC } from 'react';

import { Loader } from '../loader/Loader';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'base' | 'google' | 'inverted';
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  buttonType = 'base',
  isLoading = false,
  className = '',
  ...otherProps
}) => {
  let typeClasses = '';

  switch (buttonType) {
    case 'google':
      typeClasses = `
      bg-[#4285f4] text-white
      hover:bg-[#357ae8]
    `;
      break;
    case 'inverted':
      typeClasses = `
      bg-white text-black border border-black
      hover:bg-black hover:text-white
    `;
      break;
    case 'base':
    default:
      typeClasses = `
      bg-black text-white
      hover:bg-white hover:text-black hover:border hover:border-black
    `;
      break;
  }

  const baseClasses = `
    min-w-[165px] h-[50px] px-[35px] text-[15px] font-bold uppercase
    flex justify-center items-center
    cursor-pointer transition-colors duration-200
    font-open-sans-condensed
  `;

  return (
    <button
      type="button"
      disabled={isLoading}
      className={`${baseClasses} ${typeClasses} ${className} disabled:cursor-not-allowed disabled:opacity-50`}
      {...otherProps}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};

export default Button;
