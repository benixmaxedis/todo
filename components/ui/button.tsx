'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';
// import { FiMenu } from 'react-icons/fi';

type ButtonProps = {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  text: string | ReactNode;
  actionButton?: boolean;
};

const Button = ({ type, text, onClick, actionButton }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          'bg-orange-700 text-white',
          actionButton ? ' rounded-full p-2 ' : ' px-2 '
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
