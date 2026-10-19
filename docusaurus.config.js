// @ts-check
// Public user-guide site, served by GitHub Pages at
// ../../RakullPublicDoc/.
//
// This file lives at docs/user-guide/ in the RakullApp monorepo (the single
// source of truth) and lands at the repository root of the AgentEndeavour/
// RakullPublicDoc read-only mirror. The eight *.mdx pages stay at the mirror
// root (Mintlify consumes them from docs/user-guide/ in the monorepo); the
// deploy-pages workflow assembles them into ./docs and pulls the English
// mirror + screenshots from the RakullDoc mirror before building.
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Raku 用户使用文档',
  tagline: '沉浸式日语阅读学习平台 · 用户指南',
  favicon: 'img/favicon.svg',

  url: 'https://agentendeavour.github.io',
  baseUrl: '/RakullPublicDoc/',
  organizationName: 'AgentEndeavour',
  projectName: 'RakullPublicDoc',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      zh: {
        label: '简体中文',
        htmlLang: 'zh-CN',
      },
      en: {
        label: 'English',
        htmlLang: 'en',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Assembled by .github/workflows/deploy-pages.yml (the source pages
          // stay at the mirror root for the monorepo's Mintlify build).
          path: 'docs',
          routeBasePath: 'user-guide',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Raku',
        logo: {
          alt: 'Raku',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/AgentEndeavour',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} 上海之兴实业有限公司 · Raku`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
