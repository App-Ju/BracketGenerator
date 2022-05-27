<template>
  <ESelect :data="{ options: options }" />
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

<style lang="scss" scoped></style>
