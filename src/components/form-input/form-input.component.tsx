import type { FC } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  const isPassword = otherProps.type === 'password';
  const hasValue = !!otherProps.value;

  return (
    <div className="relative my-[45px]">
      <input
        {...otherProps}
        type={isPassword ? 'password' : otherProps.type}
        className={`block w-full border-b border-gray-400 bg-white p-2 text-[18px] text-black transition-colors duration-200 focus:border-black focus:outline-none ${
          isPassword ? 'tracking-[0.3em]' : ''
        }`}
      />
      {label && (
        <label
          className={`pointer-events-none absolute left-[5px] font-normal transition-all duration-300 ease-in-out ${
            hasValue ? 'top-[-14px] text-xs text-black' : 'text-grey top-[10px] text-base'
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
