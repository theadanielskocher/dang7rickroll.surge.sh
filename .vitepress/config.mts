import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dang7rickroll blog",
  description: "dang7rickroll blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/'},
      { text: 'About', link: '/about'}
    ],

    aside: 'left',
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/theadanielskocher/dang7rickroll.surge.sh' },
      { icon: 'facebook', link: 'https://facebook.com/godnient'}
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Powered by Vitepress & Surge.',
      copyright: 'Developed by Nguyen Dinh Hai Dang'
    },
  },

  markdown: {
    math : true
  },
})
