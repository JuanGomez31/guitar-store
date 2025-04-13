<script setup lang="ts">
import PageHeader from "@components/organism/Header/PageHeader.vue";
import PageContent from "@components/organism/Content/PageContent.vue";

function onClick(id: number)
{
  console.log(id);
}

</script>


<template>
  <PageHeader/>
  <PageContent :on-click="onClick" />
</template>
