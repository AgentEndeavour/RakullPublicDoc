import React from 'react';

// Mintlify <Steps>: an ordered, auto-numbered sequence of <Step> children.
export default function Steps({children}) {
  return <ol className="m-steps">{children}</ol>;
}
