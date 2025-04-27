<script setup lang="ts">

import Button from "@components/atoms/Button/Button.vue";
import SvgIcon from "@components/atoms/Icon/SvgIcon.vue";
</script>

<template>
  <footer class="footer">
  <Button class-list="button--normal" href="https://github.com/JuanGomez31/guitar-store">
    <SvgIcon name="circle-top-up" alt="Link icon" />
    <span>See code in GitHub</span>
  </Button>
  </footer>
</template>

<style scoped lang="scss" src="./PageFooter.scss" />