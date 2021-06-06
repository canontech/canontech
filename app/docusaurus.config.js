/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'canontech',
  tagline: 'Staking resources and infrastructure for Polkadot, Kusama, and their parachains.',
	url: 'https://canontech.github.io/',
	baseUrl: '/',
  projectName: 'canontech', // Usually your repo name.
	organizationName: 'canontech', // Usually your GitHub org/user name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
	favicon: 'img/canon_small.png',
  themeConfig: {
		// Relative to your site's "static" directory.
		// Cannot be SVGs. Can be external URLs too.
		image: 'img/canon_small.png',
		colorMode: {
			// "light" | "dark"
			defaultMode: 'light',
			// Hides the switch in the navbar
			// Useful if you want to support a single color mode
			disableSwitch: true,
		},
    navbar: {
      title: 'home',
      logo: {
        alt: 'canontech',
        src: 'img/canontech_1.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'knowledge base',
        },
        {to: '/blog', label: 'blog', position: 'left'},
        {
					href: 'https://polkadot.js.org/apps/#/staking/actions',
          label: 'nominate',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
			logo: {
				src: 'img/canontech_1.svg'
			},
      links: [
        {
          title: 'knowledge base',
          items: [
            {
              label: 'Nominating',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'social',
          items: [
            {
              label: 'Twitter',
							href: 'https://twitter.com/canon_tech',
            },
          ],
        },
				{
					title: 'resources',
					items: [
						{
							label: 'Blog',
							to: '/blog',
						},
						{
							label: 'Polkadot Basics',
							href: 'https://wiki.polkadot.network/docs/en/learn-nominator',
						},
					],
				},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} canontech`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/emostov/canon-infra/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/emostov/canon-infra/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
