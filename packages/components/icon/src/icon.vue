<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { createNameSpace } from "@neon-ui/utils/create";
import { iconProps } from "./icon";
import { computed } from "vue";

defineOptions({
  name: "NIcon",
});

const bem = createNameSpace("icon");

const props = defineProps(iconProps);

const style = computed(() => {
  if (!props.size && !props.color) return {};
  return {
    ...(props.size && { fontSize: `${props.size}px` }),
    ...(props.color && { color: `${props.color}` }),
  };
});
</script>
