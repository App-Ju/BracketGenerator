<template>
  <div class="bracket-item" :class="{ _hide: data[0]?.id === 0 }">
    <div class="bracket-item__elements" v-if="data[0]?.id !== 0">
      <div class="bracket-item__element-number">{{ data[0]?.id }}</div>
      <div class="bracket-item__element-name">{{ data[0]?.name }}</div>
    </div>
    <div class="bracket-item__elements" v-if="data[0]?.id !== 0">
      <div class="bracket-item__element-number">{{ data[1]?.id }}</div>
      <div class="bracket-item__element-name">{{ data[1]?.name }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    require: true,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";

.bracket-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 45px;
  border-radius: 4px;
  background-color: $background-color;
  overflow: hidden;
  margin: 5px 20px;
  cursor: pointer;

  &__elements {
    display: flex;
    align-items: center;
    height: 22px;
    background: #58595e;
    font-size: 14px;
  }

  &__element-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 100%;
    background: #787a80;
    margin-right: 10px;
  }
}

._hide {
  background-color: $item-background-color;
  cursor: auto;
}
</style>
