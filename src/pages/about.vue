<template>
  <div class="flex flex-col items-center gap-2">
    <ColorfulText class="text-7xl"
      >About</ColorfulText
    >
    <button
      @click="$router.push('/')"
      class="bg-purple-400 px-2 py-0.5 rounded-sm flex items-center justify-center text-white hover:bg-purple-500"
    >
      back<IMdiArrowLeft />
    </button>
  </div>
</template>
