<template>
  <img
      class="icon"
      :src="`/icons/${props.name}.svg`"
      type="image/svg+xml"
      :alt="props.alt"
  />
</template>

<script setup lang="ts">
  const props = defineProps<{
    name: string
    alt: string
  }>()
</script>

<style scoped lang="scss" src="./SvgIcon.scss" />