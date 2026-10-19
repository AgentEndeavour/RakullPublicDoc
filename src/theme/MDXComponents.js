import React from 'react';
// Swizzled from @docusaurus/theme-classic: register the Mintlify components
// the shared user-guide pages use (Frame / Steps / Step / Note / Tip /
// CardGroup / Card) as global MDX components. Root-absolute images are
// rewritten inside Frame (JSX <img> tags bypass the global img mapping);
// markdown links are baseUrl-prefixed by Docusaurus's built-in <a>. No page
// source edits needed, so the same .mdx files keep rendering on the Mintlify
// dev docs.
import MDXComponents from '@theme-original/MDXComponents';
import Frame from '../components/mintlify/Frame';
import Steps from '../components/mintlify/Steps';
import Step from '../components/mintlify/Step';
import Note from '../components/mintlify/Note';
import Tip from '../components/mintlify/Tip';
import CardGroup from '../components/mintlify/CardGroup';
import Card from '../components/mintlify/Card';

export default {
  ...MDXComponents,
  Frame,
  Steps,
  Step,
  Note,
  Tip,
  CardGroup,
  Card,
};
