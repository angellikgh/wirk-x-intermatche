import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

import ButtonOutline from '../../components/Buttons/ButtonOutline';
import * as Icons from '../../components/Icons';

export default function () {
  return (
    <>
      <Breadcrumb pathnames={['Demandes', '#315']} />

      <div className="page-title flex justify-between">
        <h1 className="flex justify-between items-center">
          <Icons.IconDocument width="20" height="18" /> Demande #315
        </h1>

        <ButtonOutline className="font-[10px] leading-[12px]">
          Télecharger le JSON
        </ButtonOutline>
      </div>

      <div className="page-content">
        <div className="flex gap-4"></div>
      </div>
    </>
  );
}
