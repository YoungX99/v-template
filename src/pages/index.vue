<script setup lang="ts">
import { useRouter } from 'vue-router'

const name = ref('')
const router = useRouter()
const go = () => {
  if (name)
    router.push(
      `/about/${encodeURIComponent(name.value)}`
    )
}
</script>
<template>
  <div
    class="block max-w-screen-sm mx-auto px-4 py-4 hover:border-opacity-100"
    border="gray-500 1px rounded-md opacity-50"
  >
    <a
      href="https://github.com/YoungX99/v-template"
      class="cursor-pointer"
      target="_blank"
    >
      <ColorfulText class="text-2xl font-mono"
        >V-TEMPLATE</ColorfulText
      ></a
    >

    <ul mt="2">
      <li>
        ⚡️ Use the new
        <ColorfulText
          >&lt;script setup&gt;</ColorfulText
        >
        style.
      </li>
      <li>
        💨 WindiCSS, the next generation
        utility-first CSS framework.
      </li>
      <li>
        😃 Components/icons/vue API auto-import
        features.
      </li>
      <li>📖 Automatically routes generated.</li>
      <li>🦾 TypeScript, of course!</li>
    </ul>

    <div class="flex justify-between mt-4">
      <div class="flex-1">
        <input
          class="w-[80%] rounded-sm h-full px-2 border text-black"
          v-model="name"
          placeholder="What's your name?"
          autocomplete="false"
          @keydown.enter="go"
        />
      </div>
      <button
        @click="go"
        :disabled="!name"
        class="bg-purple-400 px-2 py-0.5 rounded-sm flex items-center justify-center text-white hover:not-disabled:bg-purple-500 disabled:cursor-not-allowed"
      >
        Go<IMdiArrowRight />
      </button>
    </div>
  </div>
</template>
