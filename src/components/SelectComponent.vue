<template>
  <ESelect
    class="my-select"
    :data="{ options: options }"
    :styleConfig="{
      borderRadius: '4px',
      borderColor: '#303540',
      focusBorderColor: '#ff8420',
      focusBoxShadow: 'rgba(73,255,32,0.45)',
      backgroundColor: '#303540',
      filledBackgroundColor: '#303540',
      valueColor: '#fff',
      filledFontColor: '#ced5dc',
      filledColor: '#ced5dc',
      fontFamily: 'Raleway',
      valueFontSize: '14px',
      clearable: 'false',
    }"
    :dropdownStyleConfig="{
      optionColor: '#fff',
      backgroundColor: '#303540',
      activeBackgroundColor: '#ff8420',
      optionHoverBackgroundColor: '#ff8420',
      fontFamily: 'Raleway',
    }"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectComponent",
  components: {},
  props: {},
  data() {
    return {
      options: [
        {
          name: "Single Elimination",
          key: 1,
        },
        {
          name: "Double Elimination",
          key: 2,
        },
        {
          name: "Round Robin",
          key: 3,
        },
      ],
    };
  },
  computed: {},
  methods: {},
});
</script>

<style lang="scss" scoped>
:deep(.select-container__values) {
  overflow-x: unset !important;
}
</style>
