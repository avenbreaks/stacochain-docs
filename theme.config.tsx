import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const basePath = '';

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src={`${basePath}/staco.png`} width="36" />
      <h1 className="nx-font-bold nx-text-2xl">Staco</h1>
    </>
  ),
  head: (
    <>
      <link rel="icon" type="image/png" href={`${basePath}/staco.png`} />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Staco Mainnet Docs',
    };
  },
  editLink: {
    component: () => <></>,
  },
  feedback: {
    content: () => <></>,
  },
  project: {
    link: '',
  },
  docsRepositoryBase: 'https://github.com/staco-chain/staco-docs',
  footer: {
    text: '© 2025 Staco Chain, Inc. All rights reserved.',
  },
};

export default config;
