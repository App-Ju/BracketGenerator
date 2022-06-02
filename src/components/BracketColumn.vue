<template>
  <div class="bracket-column">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// const itemHeight = 55; // высота одного элемента с отступами

export default defineComponent({
  name: "BracketColumn",
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
.bracket-column {
  min-height: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
