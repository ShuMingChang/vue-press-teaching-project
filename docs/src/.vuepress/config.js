const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Demo',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#f8b62d' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/50.png',
    nav: [
      {
        text: 'Jamstack',
        link: '/jamstack/'
      },
      {
        text: 'Cloudflare Psges',
        link: '/cloudflarePages/'
      },
      {
        text: 'MarkDown 簡介',
        link: '/introductionMarkdown/',
      },
      
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/introductionMarkdown/': [
        {
          title: 'MarkDown 簡介',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/jamstack/': [
        {
          title: 'Jamstack',
          collapsable: false,
          children: [
            '',
            'CSRvsSSRvsSSG',
          ]
        }
      ],
      '/cloudflarePages/': [
        {
          title: 'Cloudflare Pages',
          collapsable: false,
          children: [
            '',
            'github-cloudflare-pages-setup',
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  markdown: {
    lineNumbers: true
  }
}
