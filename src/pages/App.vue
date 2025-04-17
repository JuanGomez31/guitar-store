<script setup lang="ts">
import PageHeader from "@components/organism/Header/PageHeader.vue";
import PageContent from "@components/organism/Content/PageContent.vue";
import {useCartStore} from "@stores/cart.store.ts";
import FloatingCardButton from "@components/molecules/CardButton/FloatingCardButton.vue";
import PageFooter from "@components/organism/Footer/PageFooter.vue";

const cartStore = useCartStore();

function onClick() {
  console.log("Pending function");
}

</script>


<template>
  <PageHeader/>
  <PageContent :on-click="cartStore.addItem" />
  <PageFooter/>
  <FloatingCardButton :total-items="cartStore.totalItems" :on-click="onClick" />
</template>
