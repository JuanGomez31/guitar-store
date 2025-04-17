<script setup lang="ts">
import SvgIcon from "@components/atoms/Icon/SvgIcon.vue";
import Button from "@components/atoms/Button/Button.vue";

const props = defineProps<{
    totalItems: number;
    onClick: () => void;
  }>();

</script>

<template>
  <Button :on-click="onClick" v-if="props.totalItems > 0" class="fixed fixed--right fixed--bottom"
          class-list="button--primary button--circle">
    <SvgIcon class="icon--no-margin" name="cart" alt="Cart icon" :badge="props.totalItems" />
    <span class="badge">{{ props.totalItems }}</span>
  </Button>
</template>

<style scoped lang="scss" src="./FloatingCardButton.scss" />