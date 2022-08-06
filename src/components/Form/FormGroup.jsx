import React from 'react';
import cx from 'classnames';

function FormGroup({ label, children, error, errors }) {
  return (
    <div class="flex flex-col mx-[6px] mb-[20px]">
      {label && (
        <label
          className={cx('text-base font-medium mb-[5px]', {
            'text-danger': error,
          })}
        >
          {label}
        </label>
      )}
      {children}
      {error && <div className="text-xs text-danger">{error && errors}</div>}
    </div>
  );
}

export default FormGroup;
