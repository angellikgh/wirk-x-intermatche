import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import ButtonOutline from '../../components/Buttons/ButtonOutline';
import { IconFile, IconCloudDownload } from '../../components/Icons';

function DocumentButton({ id, isActive, ...props }) {
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

export default function ({ documents }) {
  const [activeDoc, setActiveDoc] = useState({});

  useEffect(() => {
    if (documents.length) {
      setActiveDoc(documents[0]);
    }
  }, [documents]);

  return (
    <div className="flex flex-col gap-y-2.5 w-[500px]">
      <div className="flex gap-1">
        <IconFile />
        <span className="leading-4 font-semibold">Documents justificatifs</span>
      </div>

      <div className="flex gap-1">
        {documents.map((item) => (
          <DocumentButton
            key={`pf#${item.UidDocument}`}
            id={item.UidDocument}
            isActive={item.UidDocument === activeDoc.UidDocument}
            onClick={() => setActiveDoc(item)}
          />
        ))}
      </div>
      <div className="flex gap-2 px-2">
        <div className="flex flex-col">
          <div className="text-muted text-sm">Réference</div>
          <div className="text-sm">{activeDoc.UidDocument}</div>
        </div>
        <div className="flex flex-col">
          <div className="text-muted text-sm">Nom</div>
          <div className="text-sm">{activeDoc.InputName}</div>
        </div>
      </div>
      <div className="text-right">
        <ButtonOutline className="text-sm gap-1">
          <IconCloudDownload width="12" height="10" />
          Télecharger le document
        </ButtonOutline>
      </div>
      <div className="grow card p-1 h-[680px]">
        <iframe src={activeDoc.Path} className="w-full h-full border-0" />
      </div>
    </div>
  );
}
