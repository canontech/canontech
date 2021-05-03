/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'canon infra',
  tagline: 'Staking information and infrastructure with the experts',
	url: 'https://emostov.github.io',
  baseUrl: '/canon-infra/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
	favicon: 'img/canon_small.png',
  organizationName: 'emostov', // Usually your GitHub org/user name.
  projectName: 'canon-app', // Usually your repo name.
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
      title: '',
      logo: {
        alt: 'canon infra',
        src: 'img/canon_infra_1.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Learn nominating',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
					href: 'https://polkadot.js.org/apps/#/staking/actions',
          label: 'Nominate',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
			logo: {
				src: 'img/canon_infra_1.svg'
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
							href: 'https://twitter.com/zekemostov',
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
							label: 'Web 3 Basics',
							href: 'https://twitter.com/zekemostov',
						},
					],
				},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} canon infra`,
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
