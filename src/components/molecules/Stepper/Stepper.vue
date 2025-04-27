<script setup lang="ts">

import Button from "@components/atoms/Button/Button.vue";

const props = defineProps<{
  onAdd: () => void;
  onRemove: () => void;
  startQty: number;
  id: string;
}>();

</script>

<template>
  <div class="stepper">
    <Button :on-click="onRemove"
            :id="`stepper-remove-button-${props.id}`"
            class-list="button--secondary button--medium">-</Button>
    <span :id="`stepper-qty-${props.id}`">{{props.startQty}}</span>
    <Button
        :id="`stepper-add-button-${props.id}`"
        :on-click="onAdd"
        class-list="button--secondary button--medium">+</Button>
  </div>
</template>

<style scoped lang="scss" src="./Stepper.scss" />