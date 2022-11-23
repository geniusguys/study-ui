import Theme from 'vitepress/dist/client/theme-default/index.js'
import SmartyUI from '../../../src/entry'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(SmartyUI)
  },
}