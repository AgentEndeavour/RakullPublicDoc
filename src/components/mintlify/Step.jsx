import React from 'react';

// Mintlify <Step title="...">: one numbered step inside <Steps>.
export default function Step({title, children}) {
  return (
    <li className="m-step">
      <div className="m-step-title">{title}</div>
      <div className="m-step-body">{children}</div>
    </li>
  );
}
