import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as Icons from './Icons';

function Breadcrumb({ pathnames }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex mb-1">
      <button onClick={handleClick} className="h-3">
        <Icons.IconLeftArrow width="11" fill="#535066" />
      </button>

      {pathnames.map((name, i) => (
        <React.Fragment key={`b_${i}`}>
          {!!i && (
            <span className="ml-1 text-3 leading-[14px] text-gray-400">/</span>
          )}
          <span className="text-3 leading-[14px] ml-1">{name}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

Breadcrumb.propTypes = {
  pathnames: PropTypes.array,
};

export default Breadcrumb;
