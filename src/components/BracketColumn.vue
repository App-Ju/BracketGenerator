<template>
  <div class="bracket-column">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.bracket-column {
  min-height: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
