import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Mintlify <Tip>: same surface as <Note> with a localized "Tip" label.
export default function Tip({children}) {
  const {i18n} = useDocusaurusContext();
  const label = i18n.currentLocale === 'en' ? 'Tip' : '小提示';
  return (
    <div className="m-tip">
      <div className="m-callout-label">{label}</div>
      {children}
    </div>
  );
}
