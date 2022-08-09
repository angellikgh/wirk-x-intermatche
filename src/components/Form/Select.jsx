import React from 'react';

export default function ({ children, className, options, ...props }) {
  return (
    <select
      className={`border-base rounded h-8 p-1 pl-2 pr-8 ${className}`}
      {...props}
    >
      {children}
      {options &&
        options.map((item) => <option value={item.value}>{item.text}</option>)}
    </select>
  );
}
