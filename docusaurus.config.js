// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Solín',
  tagline: 'Sóftwer libre nativizado',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'fitojb', // Usually your GitHub org/user name.
  projectName: 'solin', // Usually your repo name.

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fitojb/solin/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fitojb/solin/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Solín',
        logo: {
          alt: 'Logo de Solín',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentos',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/fitojb/solin',
            label: 'Código fuente',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Documentos',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/traductoresSL',
              },
              {
                label: 'Código fuente',
                href: 'https://github.com/fitojb/solin',
              },
            ],
          },
        ],
        copyright: `Dedicado al dominio público. Actualizado en ${new Date().getFullYear()}. Sitio creado con Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
