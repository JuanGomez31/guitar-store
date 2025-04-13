<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps({
    href: String,
    classList: String,
    type: {
      type: String,
      default: 'button'
    },
  })

  const emit = defineEmits(['click'])

  const isLink = computed(() => !!props.href)
  const tag = computed(() => (isLink.value ? 'a' : 'button'))

  function handleClick(event : MouseEvent)
  {
    if (!isLink.value) {
      emit('click', event)
    }
  }

</script>

<template>
  <component
      :is="tag"
      :href="isLink ? props.href : undefined"
      :type="!isLink ? props.type : undefined"
      :class="['button', classList]"
      @click="handleClick"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss" src="./Button.scss" />