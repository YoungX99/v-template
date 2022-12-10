<script setup lang="ts">
import { isDark } from '@/utils'
const toggleDark = useToggle(isDark)
</script>

<template>
  <a
    class="select-none cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
    title="Toggle Color Scheme"
    @click="toggleDark()"
  >
    <IMdiMoonWaningCrescent
      v-show="isDark"
      class="text-white"
    />
    <IMdiWeatherSunny
      v-show="!isDark"
      class="text-gray-900"
    />
  </a>
</template>
