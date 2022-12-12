<template>
  <span class="colorful">
    <slot></slot>
  </span>
</template>

<style scoped>
.colorful {
  background: linear-gradient(
    271deg,
    #a0e9ff 30%,
    #a162e8 50%,
    #f093b0 70%,
    #edca85 94%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
