<script setup lang="ts">
import Title from "@shared/ui/Title/Title.vue";
import Button from "@shared/ui/Button/Button.vue";
import SvgIcon from "@shared/ui/Icon/SvgIcon.vue";
</script>

<template>
  <header class="header">
    <div class="header__container">
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
        <Button href="tel:+34000000000" class-list="button--primary">
          <SvgIcon name="contact" alt="Contact now icon" />
          <span>Contact now</span>
        </Button>
      </div>
    </div>
    <img class="header__guitar" src="/public/img/header_guitar.png" alt=""></img>
  </header>
</template>

<style scoped lang="scss" src="./PageHeader.scss" />