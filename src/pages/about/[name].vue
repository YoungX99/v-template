<script setup lang="ts">
defineProps<{ name: string }>()
</script>
<template>
  <div class="flex flex-col items-center gap-4">
    <div
      class="text-4xl flex flex-col font-mono gap-4"
    >
      About Page
      <ColorfulText
        >Hello, {{ name }}</ColorfulText
      >
    </div>
    <button
      @click="$router.push('/')"
      class="bg-purple-400 px-2 py-0.5 rounded-sm flex items-center justify-center text-white hover:bg-purple-500"
    >
      back<IMdiArrowLeft />
    </button>
  </div>
</template>
