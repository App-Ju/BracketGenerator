<template>
  <div class="bracket">
    <div class="bracket__container">
      <BracketColumn
        v-for="(column, index) in bracketStore.bracket"
        :key="index"
      >
        <BracketItem
          v-for="(item, index) in column"
          :key="index"
          :data="item"
        />
      </BracketColumn>
    </div>
  </div>
</template>

<script setup>
import BracketItem from "@/components/BracketItem.vue";
import BracketColumn from "@/components/BracketColumn.vue";
import { useBracketStore } from "@/store/bracket";

const bracketStore = useBracketStore();
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
    width: 65%;
    height: 440px;
    margin: 0 auto;
    padding: 20px;
    background: $item-background-color;
  }
}
</style>
