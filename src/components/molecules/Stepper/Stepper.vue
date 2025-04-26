<script setup lang="ts">

import Button from "@components/atoms/Button/Button.vue";

const props = defineProps<{
  onAdd: () => void;
  onRemove: () => void;
  startQty: number;
}>();

</script>

<template>
  <div class="stepper">
    <Button :on-click="onRemove" class-list="button--secondary button--medium">-</Button>
    <span>{{props.startQty}}</span>
    <Button :on-click="onAdd" class-list="button--secondary button--medium">+</Button>
  </div>
</template>

<style scoped lang="scss" src="./Stepper.scss" />