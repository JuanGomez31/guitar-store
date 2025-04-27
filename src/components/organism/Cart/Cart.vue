<script setup lang="ts">
import Title from "@components/atoms/Title/Title.vue";
import Button from "@components/atoms/Button/Button.vue";
import SvgIcon from "@components/atoms/Icon/SvgIcon.vue";
import Stepper from "@components/molecules/Stepper/Stepper.vue";
import {computed, type ComputedRef} from "vue";
import {guitarsData} from "@entities/guitar/guitar.service.ts"
import type {Guitar} from "@entities/guitar/guitar.model.ts";
import type {CartProduct} from "@entities/cart/cart.model";
import Remark from "@components/atoms/Remark/Remark.vue";
import {useCartStore} from "@stores/cart.store.ts";

const cartStore = useCartStore();


  const guitarsById: Record<number, Guitar> = guitarsData.reduce((map: Record<number, Guitar>, guitar: Guitar) => {
        map[guitar.id] = guitar;
        return map;
  }, {});

  const cartProducts: ComputedRef<CartProduct<Guitar>[]> = computed(() =>
  {
    return Object.entries(cartStore.items).map(([id, qty]) =>
    {
          const item = guitarsById[parseInt(id)];
          if (!item) return null;
          return {
            product: item,
            quantity: qty,
            totalPrice: item.price * qty
          } as CartProduct<Guitar>;
        })
        .filter((product): product is CartProduct<Guitar> => product !== null);
  });

  const totalPrice: ComputedRef<number> = computed(() => {
    return cartProducts.value.reduce((sum, cartProduct) => {
      return sum + cartProduct.totalPrice;
    }, 0);
  });

  const handleAdd = (id: number) => () => cartStore.addItem(id);
  const handleRemove = (id: number) => () => cartStore.removeItem(id);
  const handleDelete = (id: number) => () => cartStore.deleteItem(id);

</script>

<template>
  <div v-if="cartStore.cartOpened" class="popup">
    <div class="popup__cart">
      <div class="popup__header">
        <Button :on-click="cartStore.toggleCart"
                class-list="button--gray button--circle button--very-small">
          <SvgIcon class="icon--no-margin icon--medium" name="close" alt="Close icon"/>
        </Button>
      </div>
      <Title :level="2" cssClass="title--primary title--medium title--center">Cart</Title>
      <table class="popup__table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in cartProducts" :key="product.product.id">
            <td>
              <img class="popup__img" :src="`/img/guitars/${product.product.image}.jpg`" alt="Test" />
            </td>
            <td>
              {{ product.product.name }}
            </td>
            <td>
              ${{ product.product.price }}
            </td>
            <td>
              <Stepper :id="`${product.product.id}`"
                       :on-add="handleAdd(product.product.id)"
                       :on-remove="handleRemove(product.product.id)"
                       :start-qty="product.quantity" />
            </td>
            <td>
              <Button
                  :id="`delete-item-button-${product.product.id}`"
                  :on-click="handleDelete(product.product.id)"
                  class-list="button--circle button--red button--small">
                <SvgIcon class="icon--no-margin" name="trash" alt="Trash icon" />
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="popup__footer">
        <p class="popup__total">
          Total: <Remark> $ {{ totalPrice }}</Remark>
        </p>
        <Button
                :id="`clear-cart-button`"
                :on-click="cartStore.clearCart"
                class-list="button--secondary button--fill-width button--upper">
          Empty cart
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./Cart.scss" />