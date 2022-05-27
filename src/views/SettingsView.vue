<template>
  <div class="settings">
    <div class="container">
      <FormItem>
        <template v-slot:title>Название турнира</template>
        <template v-slot:content>
          <EInput
            class="settings__name-input"
            :data="{ required: true, inputMaxLength: 60 }"
            :styleConfig="{
              borderRadius: '8px',
              borderColor: '#303540',
              focusBorderColor: '#ff8420',
              backgroundColor: '#303540',
              filledBackgroundColor: '#303540',
              valueColor: '#fff',
              filledFontColor: '#ced5dc',
              filledColor: '#ced5dc',
            }"
            @update:modelValue="log"
          />
        </template>
      </FormItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormItem from "@/components/FormItem.vue";

export default defineComponent({
  name: "SettingsView",
  components: { FormItem },
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

.settings {
  min-height: calc(100vh - #{$header-height});
  height: fit-content;
  background: $background-color;
  padding-top: 50px;

  .container {
    width: 65vw;
    height: 100%;
    margin: 0 auto;
  }

  &__name-input {
    width: 440px;
  }
}
</style>
