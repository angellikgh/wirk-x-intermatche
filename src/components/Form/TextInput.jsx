import React from 'react';

function TextInput({ className, ...props }) {
  return (
    <input className={`rounded border-base w-100 ${className}`} {...props} />
  );
}

export default TextInput;
