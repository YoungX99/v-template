import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Pages from 'vite-plugin-pages'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: `${resolve(
          __dirname,
          'src'
        )}/`
      }
    ]
  },
  plugins: [
    vue(),
    WindiCSS(),
    Pages(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: true,
      eslintrc: {
        enabled: true // disable no-undef rule
      }
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'i'
        })
      ]
    }),
    Icons({
      autoInstall: true
    })
  ]
})
