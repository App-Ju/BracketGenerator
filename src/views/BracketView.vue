<template>
  <div class="bracket">
    <BracketWrapper>
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
    </BracketWrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BracketWrapper from "@/components/BracketWrapper.vue";
import BracketItem from "@/components/BracketItem.vue";
import BracketColumn from "@/components/BracketColumn.vue";
import { useSettingsStore } from "@/store/settings";

export default defineComponent({
  name: "SettingsView",
  components: { BracketColumn, BracketItem, BracketWrapper },
  setup() {
    const settingsStore = useSettingsStore();
    return { settingsStore };
  },
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

.bracket {
  display: flex;
  width: 100vw;
  min-height: calc(95vh - #{$header-height});
  height: fit-content;
  background: $background-color;
  padding-top: 50px;
}
</style>
