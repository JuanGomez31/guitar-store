<script lang="ts">
import {computed, defineComponent} from "vue";

const VALID_TAGS : string[] = ["strong", "span"];

export default defineComponent({
  props: {
    tagName: {
      type: String,
      default: "span",
      validator: (value: string) => VALID_TAGS.includes(value),
    },
    cssClass: {
      type: String,
      default: '',
    }
  },
  setup(props) {
    const tag = computed(() => {
      return VALID_TAGS.includes(props.tagName) ? props.tagName : "span";
    })
    return {
      tag
    }
  }
})
</script>

<template>
  <Component :is="tag" :class="['remark', cssClass]">
    <slot />
  </Component>
</template>

<style scoped lang="scss" src="./Remark.scss" />