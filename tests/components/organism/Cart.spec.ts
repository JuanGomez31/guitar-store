import {beforeEach, describe, expect, it} from 'vitest';
import {mount} from '@vue/test-utils';
import {createPinia, setActivePinia} from "pinia";
import {useCartStore} from "@stores/cart.store.ts";
import Cart from "@components/organism/Cart/Cart.vue";


describe('Cart Test', () => {



    beforeEach(() => {
        setActivePinia(createPinia());
    });


    it('Cart is not showed if not is opened', () => {
        const cartStore = useCartStore();
        expect(cartStore.cartOpened).toBe(false);
        const wrapper = mount(Cart, {});
        expect(wrapper.find('.popup').exists()).toBe(false);
    });


    it('Cart is showed when is opened', async () => {
        const cartStore = useCartStore();
        expect(cartStore.cartOpened).toBe(false);
        const wrapper = mount(Cart, {});
        cartStore.toggleCart();
        await wrapper.vm.$nextTick();
        expect(cartStore.cartOpened).toBe(true);
        expect(wrapper.find('.popup').exists()).toBe(true);
    });

    it('Cart products showed', () => {
        const cartStore = useCartStore();
        cartStore.addItem(1);
        cartStore.addItem(1);
        cartStore.toggleCart();
        expect(cartStore.cartOpened).toBe(true);
        const wrapper = mount(Cart, {});
        expect(wrapper.find('tbody').findAll('tr').length).toBe(1);
        expect(wrapper.find('tbody').find('tr').text()).toContain('2');
    });

    it('Can add items with stepper', async () => {
        const cartStore = useCartStore();
        cartStore.addItem(1);
        cartStore.addItem(1);
        cartStore.toggleCart();
        expect(cartStore.cartOpened).toBe(true);
        const wrapper = mount(Cart, {});
        expect(wrapper.find('#stepper-qty-1').text()).toBe('2')
        const removeButton = wrapper.find('#stepper-add-button-1');
        expect(removeButton.exists()).toBe(true);
        await removeButton.trigger('click');
        expect(cartStore.items[1]).toBe(3);
        expect(wrapper.find('#stepper-qty-1').text()).toBe('3')
    });

    it('Can remove items with stepper', async () => {
        const cartStore = useCartStore();
        cartStore.addItem(1);
        cartStore.addItem(1);
        cartStore.toggleCart();
        expect(cartStore.cartOpened).toBe(true);
        const wrapper = mount(Cart, {});
        expect(wrapper.find('#stepper-qty-1').text()).toBe('2')
        const removeButton = wrapper.find('#stepper-remove-button-1');
        expect(removeButton.exists()).toBe(true);
        await removeButton.trigger('click');
        expect(cartStore.items[1]).toBe(1);
        expect(wrapper.find('#stepper-qty-1').text()).toBe('1')
    });


    it('Can delete item from cart', async () => {
        const cartStore = useCartStore();
        cartStore.addItem(1);
        cartStore.addItem(2);
        cartStore.toggleCart();
        expect(cartStore.cartOpened).toBe(true);
        const wrapper = mount(Cart, {});
        const deleteButton = wrapper.find('#delete-item-button-1');
        expect(deleteButton.exists()).toBe(true);
        await deleteButton.trigger('click');
        expect(cartStore.items[1]).toBeUndefined();
    });


    it('Can clear cart', async () => {
        const cartStore = useCartStore();
        cartStore.addItem(1);
        cartStore.addItem(2);
        cartStore.addItem(3);
        cartStore.toggleCart();
        expect(cartStore.cartOpened).toBe(true);
        const wrapper = mount(Cart, {});
        const clearButton = wrapper.find('#clear-cart-button');
        expect(clearButton.exists()).toBe(true);
        expect(cartStore.totalItems).toBe(3)
        await clearButton.trigger('click');
        expect(cartStore.totalItems).toBe(0)
        expect(cartStore.cartOpened).toBe(false);
    });





})