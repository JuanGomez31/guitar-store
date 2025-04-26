import {defineStore} from "pinia";
import {computed, type ComputedRef, reactive, type Reactive, ref} from "vue";


export const useCartStore = defineStore('cartStore', () => {

    const items : Reactive<Record<number, number>> = reactive<Record<number, number>>({});
    const cartOpened = ref(false)


    const totalItems: ComputedRef<number> = computed(() =>
        Object.values(items).reduce((sum, qty) => sum + qty, 0)
    );

    const addItem = (id: number) => {
        items[id] = (items[id] || 0) + 1;
    }

    const removeItem = (id: number) => {
        let currentQty = items[id] || 0;
        if (currentQty == 0)
        {
            delete items[id];
            checkCartState()
            return;
        }
        items[id] = currentQty - 1;
        checkCartState()
    }

    const deleteItem = (id: number) => {
        let currentQty = items[id];
        if (currentQty)
        {
            delete items[id];
        }
        checkCartState()
    }

    const clearCart = () => {
        Object.keys(items).forEach(key => delete items[+key]);
        checkCartState()
    }

    const toggleCart = () => {
        cartOpened.value = !cartOpened.value;
        if (cartOpened.value)
        {
            document.body.style.overflow = 'hidden';
        }
        else
        {
            document.body.style.overflow = 'auto';
        }
    }

    const checkCartState = () => {
        if (totalItems.value == 0)
        {
            toggleCart();
        }
    }


    return {
        items,
        totalItems,
        cartOpened,
        addItem,
        removeItem,
        clearCart,
        toggleCart,
        deleteItem
    }
})