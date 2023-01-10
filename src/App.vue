<template>
  <nav class="flex justify-end gap-4 p-4 text-lg">
    <a
      href="https://github.com/YoungX99/v-template"
      class="cursor-pointer"
      target="_blank"
      ><IMdiGithub
        class="opacity-50 hover:opacity-100 transition-opacity"
    /></a>

    <ToogleTheme />
  </nav>
  <router-view></router-view>
</template>
