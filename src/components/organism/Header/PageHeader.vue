<script setup lang="ts">
import Title from "@components/atoms/Title/Title.vue";
import Button from "@components/atoms/Button/Button.vue";
import SvgIcon from "@components/atoms/Icon/SvgIcon.vue";
import Remark from "@components/atoms/Remark/Remark.vue";
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__nav">
        <a href="/">
          <img class="header__nav__logo" src="/icons/logo.svg" type="image/svg+xml" alt="">
        </a>
      </div>
      <div class="header__content">
        <Title :level="1" :cssClass="'title--primary title--big'">Guitar course</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, possimus quibusdam dolor nemo velit quo,
          fuga omnis, iure molestias optio tempore sint at ipsa dolorum odio exercitationem eos inventore odit.
        </p>
        <Remark :cssClass="'remark--primary remark--big'">$399</Remark>
        <Button href="tel:+34000000000" class-list="button--primary">
          <SvgIcon name="contact" alt="Contact now icon" />
          <span>Contact now</span>
        </Button>
      </div>
    </div>
    <img class="header__guitar" src="/img/header_guitar.png" alt=""></img>
  </header>
</template>

<style scoped lang="scss" src="./PageHeader.scss" />