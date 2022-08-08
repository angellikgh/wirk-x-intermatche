import React from 'react';
import cx from 'classnames';

export default function ButtonOutline({ children, className, text, ...props }) {
  return (
    <button
      type="button"
      className={cx('btn btn-outline rounded', className)}
      {...props}
    >
      {children} {text}
    </button>
  );
}
