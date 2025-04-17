import {defineStore} from "pinia";
import {computed, type ComputedRef, reactive, type Reactive} from "vue";


export const useCartStore = defineStore('cartStore', () => {

    const items : Reactive<Record<number, number>> = reactive<Record<number, number>>({});

    const totalItems: ComputedRef<number> = computed(() =>
        Object.values(items).reduce((sum, qty) => sum + qty, 0)
    );

    const addItem = (id: number) => {
        items[id] = (items[id] || 0) + 1;
    }


    return {
        items,
        totalItems,
        addItem
    }
})