const codeTheme = require("prism-react-renderer/themes/palenight")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'docs',
  tagline: 'Aha! now you know...',
  url: 'https://hgup.github.io/',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hgup', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/style.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'hgup-docs',
        logo: {
          alt: 'hgup-docs logo',
          src: 'img/logo.svg',
        },
        items: [
          /** TODO later **/
        ]
      },

      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} hgup, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: codeTheme,
        darkTheme: codeTheme,
      },
    }),
};

module.exports = config;
