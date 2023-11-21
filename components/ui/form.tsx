'use client';

import { useRef, ReactNode } from 'react';

type FormProps = {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: () => void;
};

const Form = ({ children, action, className, onSubmit }: FormProps) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
      className={className}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
