import React from 'react';

function TextInput({ className, ...props }) {
  return (
    <input
      className={`rounded border-base w-100 h-[37px]${className}`}
      {...props}
    />
  );
}

export default TextInput;
