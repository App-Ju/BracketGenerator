<template>
  <div class="bracket-wrapper">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BracketWrapper",
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

.bracket-wrapper {
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
</style>
