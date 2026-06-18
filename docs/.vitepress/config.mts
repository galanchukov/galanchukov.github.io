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
      },
      {
        text: 'Искусство ремонта',
        items: [
          { text: 'Топ сайтов Сочи (SEO)', link: '/art-remont/seo_and_search/Топ_сайтов_Сочи' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/galanchukov' }
    ]
  }
})
