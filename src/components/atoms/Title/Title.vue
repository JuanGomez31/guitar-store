<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps({
    level: {
      type: Number,
      default: 1,
      validator: (value : number) => [1, 2, 3, 4, 5, 6].includes(value),
    },
    cssClass: {
      type: String,
      default: '',
    }
  })

  const tag = computed(() => `h${props.level}`)

</script>

<template>
  <component :is="tag" :class="['title', cssClass]">
    <slot />
  </component>
</template>

<style scoped lang="scss" src="./Title.scss" />