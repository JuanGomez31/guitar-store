<script setup lang="ts">
import type {Guitar} from "@entities/guitar/guitar.model.ts";
import Title from "@components/atoms/Title/Title.vue";
import Button from "@components/atoms/Button/Button.vue";
import SvgIcon from "@components/atoms/Icon/SvgIcon.vue";
import Remark from "@components/atoms/Remark/Remark.vue";

const props = defineProps<{
    onClick: (id: number) => void;
    guitar: Guitar;
  }>();

</script>

<template>
  <div class="guitar_card">
    <img class="guitar_card__image" :src="`/img/guitars/${props.guitar.image}.jpg`" alt="Guitar image" />
    <div class="guitar_card__content">
      <Title :level="3" :cssClass="'title--secondary title--medium title--upper'">
        {{props.guitar.name}}
      </Title>
      <p>{{guitar.description}}</p>
      <Remark class="remark--primary remark--medium">${{props.guitar.price}}</Remark>
      <Button :on-click="() => props.onClick(props.guitar.id)" class-list="button--secondary">
        <SvgIcon name="cart" alt="Add to cart icon" />
        <span>Add to cart</span>
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./GuitarCard.scss" />