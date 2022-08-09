import React from 'react';
import cx from 'classnames';

export default function ({ label, children, className, ...props }) {
  return (
    <span className={cx(`tag`, className)}>
      {children}
      {label}
    </span>
  );
}
