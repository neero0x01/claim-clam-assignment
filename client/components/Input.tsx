'use client';

import React from 'react';
import { Search } from 'lucide-react';

type IInput = React.ComponentPropsWithoutRef<'input'>

const Input = ({ value, onChange }: IInput) => {

  return (
    <div className="relative rounded-md shadow-sm flex-grow">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        className="block w-full rounded-l-md border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="My Vampire System"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default Input;