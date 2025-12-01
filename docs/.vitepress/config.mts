import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "《代码整洁之道》中文版",
  // meta 标签 <= 80 中文字符
  description: "代码整洁之道 罗伯特·C·马丁"
  + "; Clean Code: A Handbook of Agile Software Craftsmanship 中文翻译"
  + "; 代碼整潔之道 馬丁 (Robert C. Martin)"
  ,
  lang: 'zh-CN',
  base: '/Clean-Code-zh/',

  lastUpdated: true,
  // https://vitepress.dev/zh/guide/sitemap-generation#options
  sitemap: {
    hostname: 'https://cactus-proj.github.io/Clean-Code-zh/'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '章节正文', link: '/ch1' },
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '第 1 章 整洁代码', link: '/ch1' },
          { text: '第 2 章 有意义的命名', link: '/ch2' },
          { text: '第 3 章 函数', link: '/ch3' },
          { text: '第 4 章 注释', link: '/ch4' },
          { text: '第 5 章 格式', link: '/ch5' },
          { text: '第 6 章 对象和数据结构', link: '/ch6' },
          { text: '第 7 章 错误处理', link: '/ch7' },
          { text: '第 8 章 边界', link: '/ch8' },
          { text: '第 9 章 单元测试', link: '/ch9' },
          { text: '第 10 章 类', link: '/ch10' },
          { text: '第 11 章 系统', link: '/ch11' },
          { text: '第 12 章 迭进', link: '/ch12' },
          { text: '第 13 章 并发编程', link: '/ch13' },
          { text: '第 14 章 逐步改进', link: '/ch14' },
          { text: '第 15 章 JUnit 内幕', link: '/ch15' },
          { text: '第 16 章 重构 SerialDate', link: '/ch16' },
          { text: '第 17 章 味道与启发', link: '/ch17' },
          { text: '附录 A 并发编程 II', link: '/apA' },
        ]
      }
    ],

    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cactus-proj/Clean-Code-zh' }
    ],

    editLink: {
      pattern: 'https://github.com/Cactus-proj/Clean-Code-zh/edit/main/docs/:path'
    },
  }
})
