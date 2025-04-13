<script setup lang="ts">
import Title from "@shared/ui/Title/Title.vue";
</script>

<template>
  <header class="header">
    <div class="header__nav">
      <a href="/">
        <img class="header__nav__logo" src="/public/icons/logo.svg" type="image/svg+xml" alt="">
      </a>
    </div>
    <div class="header__content">
      <Title :level="1" :cssClass="'title--primary title--big'">Guitar course</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, possimus quibusdam dolor nemo velit quo,
        fuga omnis, iure molestias optio tempore sint at ipsa dolorum odio exercitationem eos inventore odit.
      </p>
      <Title :level="2" :cssClass="'title--primary title--big'">$399</Title>
      <a href="tel:+34000000000" class="header__content__button">
        <img class="header__content__button__contact" src="/public/icons/contact.svg"  type="image/svg+xml" alt="" />
        <span>Contact now</span>
      </a>
    </div>
  </header>
</template>

<style scoped lang="scss" src="./PageHeader.scss" />