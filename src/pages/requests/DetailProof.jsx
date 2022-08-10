import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import ButtonOutline from '../../components/Buttons/ButtonOutline';
import { IconCloudDownload } from '../../components/Icons';

function ProofButton({ id, isActive, ...props }) {
  return (
    <button
      className={cx('py-1 px-2 rounded-xl text-sm', {
        'text-white bg-muted': isActive,
      })}
      {...props}
    >
      Justificatif #{id}
    </button>
  );
}

export default function ({ proofs }) {
  const [activeProof, setActiveProof] = useState({});

  useEffect(() => {
    if (proofs.length) {
      setActiveProof(proofs[0]);
    }
  }, [proofs]);

  return (
    <div className="flex flex-col gap-y-2.5">
      <div className="flex gap-1">
        {proofs.map((item) => (
          <ProofButton
            key={`pf#${item.id}`}
            id={item.id}
            isActive={item.id === activeProof.id}
            onClick={() => setActiveProof(item)}
          />
        ))}
      </div>
      <div className="flex gap-2 px-2">
        <div className="flex flex-col">
          <div className="text-muted text-sm">Réference</div>
          <div className="text-sm">{activeProof.reference}</div>
        </div>
        <div className="flex flex-col">
          <div className="text-muted text-sm">Nom</div>
          <div className="text-sm">{activeProof.filename}</div>
        </div>
      </div>
      <div className="text-right">
        <ButtonOutline className="text-sm gap-1">
          <IconCloudDownload width="12" height="10" />
          Télecharger le document
        </ButtonOutline>
      </div>
      <div className="grow card p-1">
        <iframe src={activeProof.filepath} className="w-full h-full border-0" />
      </div>
    </div>
  );
}
