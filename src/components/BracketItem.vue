<template>
  <div class="bracket-item">
    <div class="bracket-item__elements">
      <div class="bracket-item__element-number">1</div>
      <div class="bracket-item__element-name">name</div>
    </div>
    <div class="bracket-item__elements">
      <div class="bracket-item__element-number">22</div>
      <div class="bracket-item__element-name">name</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BracketItem",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
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
  margin: 5px 0;

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
</style>
