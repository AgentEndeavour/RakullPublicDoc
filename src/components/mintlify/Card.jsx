import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CardIcon from './CardIcon';

// Mintlify <Card title icon href>: a hairline-bordered link card. Internal
// hrefs ("/user-guide/...") go through baseUrl so they survive the project
// page path prefix.
export default function Card({title, icon, href, children}) {
  const inner = (
    <>
      <span className="m-card-icon">
        <CardIcon name={icon} />
      </span>
      <span className="m-card-text">
        <strong>{title}</strong>
        <span>{children}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <Link className="m-card" to={useBaseUrl(href)}>
        {inner}
      </Link>
    );
  }
  return <div className="m-card">{inner}</div>;
}
