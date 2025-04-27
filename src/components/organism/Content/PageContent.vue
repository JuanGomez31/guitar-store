<script setup lang="ts">
import Title from "@components/atoms/Title/Title.vue";
import {guitarsData} from "@entities/guitar/guitar.service.ts"
import GuitarCard from "@components/molecules/GuitarCard/GuitarCard.vue";

const props = defineProps<{
    onClick: (id: number) => void;
  }>();

</script>

<template>
  <main class="main">
    <Title :level="2" :cssClass="'title--primary title--big title--center'">Our Products</Title>
    <div class="main__guitars_container">
      <GuitarCard
          v-for="guitar in guitarsData"
          :key="guitar.id"
          :guitar="guitar"
          :on-click="props.onClick" />
    </div>
  </main>
</template>

<style scoped lang="scss" src="./PageContent.scss" />