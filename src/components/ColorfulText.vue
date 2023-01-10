<template>
  <span class="colorful">
    <slot></slot>
  </span>
</template>

<style scoped>
.colorful {
  background-image: linear-gradient(
    to left,
    #905de2 0%,
    #e5b2ca 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
