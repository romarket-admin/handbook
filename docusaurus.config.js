// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RoMarket Staff Handbook',
  tagline: 'Documents and Regulations for Staff Members at RoMarket',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://romarket-admin.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/handbook/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'romarket-admin', // Usually your GitHub org/user name.
  projectName: 'handbook', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'RoMarket',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Handbook',
          },
          {
            href: 'https://app.firefli.net/workspace/371372280',
            label: 'Staff Portal',
            position: 'left',
          },
     //     {to: '/blog', label: 'Blog', position: 'left'},
          {
            className: "navbar__website navbar__icon",
            "aria-label": "RoMarket Website",
            position: "right",
            href: "https://google.com",
          },
          {
            className: "navbar__discord navbar__icon",
            "aria-label": "Discord Server",
            position: "right",
            href: "https://discord.gg/5Ypu3HGVhc",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [{
            title: 'Roblox',
            items: [
              {
                label: 'Roblox Community',
                href: 'https://www.roblox.com/communities/371372280/RoMarket-Incorporated#!/about',
              },
              {
                label: 'Main Game [Under Development]',
                href: 'https://www.roblox.com/games/122270490259170/RoMarket-Shopping-Center',
              },
              {
                label: 'Training Center [Under Devlopment]',
                href: 'https://www.roblox.com/games/122270490259170/RoMarket-Shopping-Center',
              },
              {
                label: 'Application Center [Under Development]',
                href: 'https://www.roblox.com/games/122270490259170/RoMarket-Shopping-Center',
              },
            ],
          },
          {
            title: 'Discord',
            items: [
              {
                label: 'Main Server',
                href: 'https://discord.gg/5Ypu3HGVhc',
              },
              {
                label: 'Human Resources Server',
                href: 'https://discord.gg/swfrWCpVmt',
              },
              {
                label: 'Public Relations Server - Invite Only',
                href: 'https://discord.com/channels/1456118310860095651/1456438503519813789',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'RoMarket Website [Under Development]',
                href: 'https://discord.com/channels/1456118310860095651/1458293127554007102',
              },
              {
                label: 'Staff Portal',
                href: 'https://app.firefli.net/workspace/371372280',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RoMarket Incorporated, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
