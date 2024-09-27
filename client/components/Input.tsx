'use client';

import React from 'react';

interface IInput extends React.ComponentPropsWithoutRef<'input'> {
}

const Input = ({ value, onChange }: IInput) => {

  return (
    <input
      type="text"
      name="search"
      id="search"
      className="block w-full rounded-l-md border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="My Vampire System"
      value={value}
      onChange={onChange}
    />

  );
};
export default Input;