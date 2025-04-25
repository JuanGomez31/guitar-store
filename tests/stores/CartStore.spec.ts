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

    test('remove quantity if item exits', () => {
        const store = useCartStore()
        store.addItem(1)
        store.addItem(1)
        expect(store.items[1]).toBe(2)
        store.removeItem(1)
        expect(store.items[1]).toBe(1)
    })

    test('remove quantity delete if final quantity is zero', () => {
        const store = useCartStore()
        store.addItem(1)
        expect(store.items[1]).toBe(1)
        store.removeItem(1)
        expect(store.items[1]).toBeUndefined()
    })

    test('deleteItem should remove product from items lists', () => {
        const store = useCartStore()
        store.addItem(1)
        store.addItem(1)
        expect(store.items[1]).toBe(2)
        store.deleteItem(1)
        expect(store.items[1]).toBeUndefined()
    })

    test('clear cart should remove all products from cart', () => {
        const store = useCartStore()
        store.addItem(1)
        store.addItem(2)
        store.addItem(3)
        expect(store.totalItems).toBe(3)
        store.clearCart()
        expect(store.totalItems).toBe(0)
    })

    test('toggle cart should change opened status', () => {
        const store = useCartStore()
        expect(store.cartOpened).toBe(false)
        store.toggleCart()
        expect(store.cartOpened).toBe(true)
        store.toggleCart()
        expect(store.cartOpened).toBe(false)
    })

    test('cart should be autoclosed if is empty on clear', () => {
        const store = useCartStore()
        store.addItem(1)
        store.toggleCart()
        expect(store.cartOpened).toBe(true)
        store.clearCart()
        expect(store.cartOpened).toBe(false)
    })


    test('cart should be autoclosed if is empty on deleteItem', () => {
        const store = useCartStore()
        store.addItem(1)
        store.toggleCart()
        expect(store.cartOpened).toBe(true)
        store.deleteItem(1)
        expect(store.cartOpened).toBe(false)
    })


    test('cart should be autoclosed if is empty on removeItem', () => {
        const store = useCartStore()
        store.addItem(1)
        store.toggleCart()
        expect(store.cartOpened).toBe(true)
        store.deleteItem(1)
        expect(store.cartOpened).toBe(false)
    })

});