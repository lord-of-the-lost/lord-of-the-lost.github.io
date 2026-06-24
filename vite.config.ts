import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base — путь, по которому сайт будет доступен на GitHub Pages.
// Репозиторий lord-of-the-lost.github.io — это user page, сайт на корне домена,
// поэтому base: '/'.
// Если будешь публиковать как project page (username.github.io/repo/) —
// поставь base: '/repo/' и поправь favicon в index.html и редирект в public/404.html.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
