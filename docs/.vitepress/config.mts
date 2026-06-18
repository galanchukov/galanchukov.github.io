import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "База Знаний",
  description: "Мои заметки и проекты",
  themeConfig: {
    // Навигация сверху
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Заметки', link: '/notes/hello' }
    ],

    // Боковое меню
    sidebar: [
      {
        text: 'Мои Заметки',
        items: [
          { text: 'Привет, мир!', link: '/notes/hello' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/galanchukov' }
    ]
  }
})
