'use client';

import React from 'react';

type IButton = React.ComponentPropsWithoutRef<'button'>

const Button = ({ onClick, children }: IButton) => {
  return (
    <button
      type="button"
      className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus:z-10"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;