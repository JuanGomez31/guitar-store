import {beforeEach, describe, expect, it} from 'vitest'
import {mount} from '@vue/test-utils'
import FloatingCartButton from "@components/molecules/CartButton/FloatingCartButton.vue";
import {createPinia, setActivePinia} from "pinia";
import {useCartStore} from "@stores/cart.store.ts";


describe('Floating Card button test', () => {


    beforeEach(() => {
        setActivePinia(createPinia());
    });


    it('No render if it not have items', () => {
        const wrapper = mount(FloatingCartButton, {})
        expect(wrapper.find('button').exists()).toBe(false);
    })


    it('Render if it have items and show correct number', () =>
    {
        const cartStore = useCartStore();
        cartStore.addItem(1);
        const wrapper = mount(FloatingCartButton, {})
        const badge = wrapper.find('span.badge');
        expect(badge.exists()).toBe(true);
        expect(badge.text()).toBe(`${cartStore.totalItems}`);
    })


    it('Call toggleCart correctly', async () => {
        const cartStore = useCartStore();
        cartStore.addItem(1);
        const wrapper = mount(FloatingCartButton, {})
        expect(wrapper.find('button').exists()).toBe(true);
        await wrapper.trigger('click');
        expect(cartStore.cartOpened).toBe(true);
    });


})