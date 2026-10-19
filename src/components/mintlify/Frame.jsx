import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Mintlify <Frame caption="...">: a figure wrapping a screenshot with an
// optional caption.
//
// The shared pages are authored for a domain-root Mintlify site, so their
// screenshots use root-absolute src ("/images/..."). On GitHub project pages
// the site lives under /RakullPublicDoc/, so prefix root-absolute image src
// here, at the one place every user-guide screenshot is wrapped. The MDX
// <img> is a literal JSX tag that bypasses the global img component mapping.
function prefixImgSrc(node, resolve) {
  if (!React.isValidElement(node)) return node;
  if (node.type === 'img') {
    const {src} = node.props;
    if (typeof src === 'string' && src.startsWith('/')) {
      return React.cloneElement(node, {src: resolve(src)});
    }
    return node;
  }
  if (node.props?.children) {
    return React.cloneElement(
      node,
      undefined,
      React.Children.map(node.props.children, (child) =>
        prefixImgSrc(child, resolve),
      ),
    );
  }
  return node;
}

export default function Frame({caption, children}) {
  const resolve = useBaseUrl;
  const media = React.Children.map(children, (child) =>
    prefixImgSrc(child, resolve),
  );
  return (
    <figure className="m-frame">
      <div className="m-frame-media">{media}</div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
