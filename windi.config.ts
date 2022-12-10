import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  }
})
