// ============================================================================
//  КОНФИГ ЛЕНДИНГА — единственный файл, который нужно править под себя.
//  Все тексты, ссылки и контакты собраны здесь. Меняй значения справа от ":".
//  HTML/JSX трогать не нужно — компоненты сами подставят эти строки.
// ============================================================================

export interface NavLink {
  label: string
  href: string // якорь секции, например "#skills"
}

export interface Skill {
  title: string
  level: string // подпись уровня: "Основная специализация", "Дополнительно" и т.п.
  description: string
}

export interface Contact {
  label: string // что это: Email, Telegram, GitHub ...
  value: string // как показать на странице
  href: string // куда ведёт ссылка (mailto:, https://, tg://)
}

export const content = {
  // --- Мета (вкладка браузера) ---
  meta: {
    title: 'Nikolay Ignatov — Mobile Developer',
    lang: 'ru',
  },

  // --- Шапка ---
  header: {
    logo: 'N.Ignatov',
    nav: [
      { label: 'О себе', href: '#about' },
      { label: 'Навыки', href: '#skills' },
      { label: 'Контакты', href: '#contacts' },
    ] as NavLink[],
    themeLight: 'Тёмная тема',
    themeDark: 'Светлая тема',
  },

  // --- Первый экран (hero) ---
  hero: {
    greeting: 'Привет, меня зовут',
    name: 'Николай Игнатов',
    role: 'Разработчик мобильных приложений',
    tagline:
      'Создаю мобильные приложения. Основная специализация — iOS, также разрабатываю под Android.',
    ctaPrimary: { label: 'Связаться', href: '#contacts' },
    ctaSecondary: { label: 'Мои навыки', href: '#skills' },
  },

  // --- О себе ---
  about: {
    heading: 'О себе',
    paragraphs: [
      'Занимаюсь разработкой мобильных приложений: от идеи и прототипа до публикации в сторах.',
      'Основной фокус — нативная iOS-разработка (Swift, SwiftUI, UIKit). Помимо этого делаю приложения под Android, поэтому могу закрыть обе платформы.',
      'Люблю минималистичный, понятный интерфейс и чистый код.',
    ],
  },

  // --- Навыки / стек ---
  skills: {
    heading: 'Навыки',
    items: [
      {
        title: 'iOS',
        level: 'Основная специализация',
        description: 'Swift, SwiftUI, UIKit',
      },
      {
        title: 'Android',
        level: 'Дополнительно',
        description: 'Kotlin, Jetpack Compose, KMP',
      },
      {
        title: 'Инструменты',
        level: 'Каждый день',
        description: 'Xcode, Git, Figma, CI/CD',
      },
    ] as Skill[],
  },

  // --- Контакты ---
  contacts: {
    heading: 'Контакты',
    subtitle: 'Открыт к новым проектам и сотрудничеству.',
    items: [
      { label: 'Email', value: 'n.s.ignatov.dev@gmail.com', href: 'mailto:n.s.ignatov.dev@gmail.com' },
      { label: 'Telegram', value: '@lord_0f_the_lost', href: 'https://t.me/lord_0f_the_lost' },
      { label: 'GitHub', value: 'github.com/lord-of-the-lost', href: 'https://github.com/lord-of-the-lost' },
    ] as Contact[],
  },

  // --- Подвал ---
  footer: {
    text: '© 2026 Николай Игнатов',
  },
}

export type Content = typeof content
