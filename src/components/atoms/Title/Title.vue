<script lang="ts">
import {computed, defineComponent} from 'vue'

const SECURED_LEVELS = [1, 2, 3, 4, 5, 6]

export default defineComponent({
  props: {
    level: {
      type: Number,
      default: 1,
      validator: (value: number) => SECURED_LEVELS.includes(value),
    },
    cssClass: {
      type: String,
      default: '',
    }
  },
  setup(props) {
    const tag = computed(() => {
      const level = SECURED_LEVELS.includes(props.level) ? props.level : 1
      return `h${level}`
    })
    return {
      tag
    }
  }
})

</script>

<template>
  <component :is="tag" :class="['title', cssClass]">
    <slot />
  </component>
</template>

<style scoped lang="scss" src="./Title.scss" />