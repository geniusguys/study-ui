const sidebar = {
  '/': [
    {
      text: 'Guide',
      items: [
        { text: '快速开始', link: '/' }, 
        { text: '通用', link: '/components/button/' }, 
      ]
    },
    {
      text: 'Components',
      items: [
        { text: '组件', link: '/components/' },
        { text: '按钮', link: '/components/button/' }, 
      ]
    }
  ]
}
const config = {
  themeConfig: {
    sidebar,
  },
  // markdown: {
  //   config: (md) => {
  //     // 添加DemoBlock插槽
  //     const { demoBlockPlugin } = require('vitepress-theme-demoblock')
  //     md.use(demoBlockPlugin)
  //   }
  // }
}
export default config