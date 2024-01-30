import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Json Components",
  description: "Vue json component library",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/getting-started/introduction' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/docs/getting-started/introduction' },
          { text: 'Quick start', link: '/docs/getting-started/quick-start' },
        ],
      },
      {
        text: 'Components',
        items: [
          {
            text: 'Table',
            items: [
              { text: 'Introduction', link: '/docs/components/table/introduction' },
            ],
          },
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/loiaconof/vue-json-components' }
    ]
  }
})
