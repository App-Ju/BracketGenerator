<template>
  <div class="bracket">
    <div class="bracket__container">
      <BracketColumn>
        <BracketItem style="opacity: 0"></BracketItem>
        <BracketItem></BracketItem>
        <BracketItem></BracketItem>
        <BracketItem></BracketItem>
        <BracketItem style="opacity: 0"></BracketItem>
        <BracketItem></BracketItem>
        <BracketItem></BracketItem>
        <BracketItem></BracketItem>
      </BracketColumn>
      <BracketColumn>
        <BracketItem></BracketItem>
        <BracketItem></BracketItem>
        <BracketItem></BracketItem>
        <BracketItem></BracketItem>
      </BracketColumn>
      <BracketColumn>
        <BracketItem></BracketItem>
        <BracketItem></BracketItem>
      </BracketColumn>
      <BracketColumn>
        <BracketItem></BracketItem>
      </BracketColumn>
    </div>
  </div>
</template>

<script setup>
import BracketItem from "@/components/BracketItem.vue";
import BracketColumn from "@/components/BracketColumn.vue";
import { useSettingsStore } from "@/store/settings";

const settingsStore = useSettingsStore();
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";

.bracket {
  display: flex;
  width: 100vw;
  min-height: calc(95vh - #{$header-height});
  height: fit-content;
  background: $background-color;
  padding-top: 50px;
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 65%;
    height: 440px;
    margin: 0 auto;
    padding: 20px;
    background: $item-background-color;
    overflow: auto;
  }
}
</style>
