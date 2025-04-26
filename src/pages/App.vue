<script setup lang="ts">
import PageHeader from "@components/organism/Header/PageHeader.vue";
import PageContent from "@components/organism/Content/PageContent.vue";
import {useCartStore} from "@stores/cart.store.ts";
import FloatingCartButton from "@components/molecules/CartButton/FloatingCartButton.vue";
import PageFooter from "@components/organism/Footer/PageFooter.vue";
import Cart from "@components/organism/Cart/Cart.vue";

const cartStore = useCartStore();


</script>


<template>
  <PageHeader/>
  <PageContent :on-click="cartStore.addItem" />
  <PageFooter/>
  <FloatingCartButton />
  <Cart />
</template>
