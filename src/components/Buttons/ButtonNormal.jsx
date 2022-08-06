import React from 'react';

export default function ButtonNormal({ text, ...props }) {
  return (
    <button type="button" className="btn brn-primary rounded w-100" {...props}>
      {text}
    </button>
  );
}
