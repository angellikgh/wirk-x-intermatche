import React from 'react';
import { IconCheckCircle, IconCloseCircle } from '../../../components/Icons';

function TaskItem({ title, isTrue }) {
  return (
    <li className="flex flex-col gap-y-1 mb-2.5">
      <span className="text-xs text-muted">{title}</span>
      <span className="flex">
        {!!isTrue ? (
          <>
            <IconCheckCircle />
            <span className="text-sm leading-4 ml-1">Oui</span>
          </>
        ) : (
          <>
            <IconCloseCircle />
            <span className="text-sm leading-4 ml-1">Surement un faux</span>
          </>
        )}
      </span>
    </li>
  );
}

export default function TaskList({ list }) {
  return (
    <ul>
      {list &&
        list.map((item, i) => (
          <TaskItem key={`ti_${i}`} title={item.title} isTrue={item.isTrue} />
        ))}
    </ul>
  );
}
