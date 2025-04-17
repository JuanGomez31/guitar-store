import {beforeEach, describe, expect, it} from 'vitest';
import {createPinia, setActivePinia} from 'pinia';
import {useCartStore} from '@stores/cart.store';

describe('useCartStore', () =>
{

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('starts with no items', () => {
        const cart = useCartStore();
        expect(cart.totalItems).toBe(0);
        expect(cart.items).toEqual({});
    });

    it('adds items and updates totalItems correctly', () => {
        const cart = useCartStore();
        cart.addItem(1);
        cart.addItem(2);
        expect(cart.items[1]).toBe(1);
        expect(cart.items[2]).toBe(1);
        expect(cart.totalItems).toBe(2);
    });

    it('increments quantity if item already exists', () => {
        const cart = useCartStore();
        cart.addItem(5);
        cart.addItem(5);
        expect(cart.items[5]).toBe(2);
        expect(cart.totalItems).toBe(2);
    });

});