import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NetherScript",
  description: "MCFunction Compiler",
  base: "/netherscript-docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/general/about' },
      {
        text: 'References',
        items: [
          { text: 'v0.1-mc1.21.11', link: '/reference/v0.1-mc1.21.11' }
        ]
      }
    ],

    sidebar: {
      '/general/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is NetherScript?', link: '/general/about' },
            { text: 'Getting Started', link: '/general/getting_started' },
            { text: 'Using the Compiler', link: '/general/usage' }
          ]
        }
      ],
      '/reference/': [
        { text: 'Index', link: './'},
        { text: 'Using the Compiler', link: './usage' },
        { text: 'Syntax', link: './syntax' }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MapVerse-net/netherscript' },
      { icon: 'discord', link: 'https://discord.gg/xFgTJtebgp'}
    ],

    search: {
      provider: 'local'
    }
  }
})
