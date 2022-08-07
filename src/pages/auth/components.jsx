import React from 'react';

export function Header({ title }) {
  return (
    <h1 className="text-center text-[24px] font-[600] mb-[20px] leading-[29px]">
      {title}
    </h1>
  );
}
