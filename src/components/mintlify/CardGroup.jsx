import React from 'react';
import clsx from 'clsx';

// Mintlify <CardGroup cols={2}>: responsive card grid.
export default function CardGroup({cols = 2, children}) {
  return (
    <div
      className={clsx('m-cards', cols === 3 && 'm-cards-3')}
    >
      {children}
    </div>
  );
}
