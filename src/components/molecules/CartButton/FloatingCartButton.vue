<script setup lang="ts">
import SvgIcon from "@components/atoms/Icon/SvgIcon.vue";
import Button from "@components/atoms/Button/Button.vue";
import {useCartStore} from "@stores/cart.store.ts";

const cartStore = useCartStore();

</script>

<template>
  <Button :on-click="cartStore.toggleCart" v-if="cartStore.totalItems > 0" class="fixed fixed--right fixed--bottom"
          class-list="button--primary button--circle">
    <SvgIcon class="icon--no-margin" name="cart" alt="Cart icon" />
    <span class="badge">{{ cartStore.totalItems }}</span>
  </Button>
</template>

<style scoped lang="scss" src="./FloatingCartButton.scss" />