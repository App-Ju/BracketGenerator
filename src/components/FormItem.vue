<template>
  <div class="form-item">
    <div class="form-item__title">
      <slot name="title" />
    </div>
    <div class="form-item__content">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";

$title-width: 230px;

.form-item {
  display: flex;
  align-items: start;
  width: 100%;
  height: fit-content;
  margin-bottom: 15px;
  color: $text-color;

  &__title {
    display: flex;
    justify-content: end;
    width: $title-width;
    min-height: 29px;
    padding-top: 11px;
    padding-right: 20px;
    font-weight: 500;
  }

  &__content {
    display: flex;
    align-items: center;
    min-height: 40px;
    width: 440px;
    padding-left: 15px;
    font-weight: 500;
  }
}
</style>
