import {describe, expect, it, vi} from 'vitest';
import {mount} from '@vue/test-utils';
import Stepper from '@components/molecules/Stepper/Stepper.vue';


describe('Stepper test', () => {

    it('Shows initial start qty correct', () => {
        let qty = 2;
        const wrapper = mount(Stepper, {
            props: {
                startQty: qty,
                onAdd: vi.fn(),
                onRemove: vi.fn(),
                id: 'test'
            }
        });
        const textElement = wrapper.find('#stepper-qty-test');
        expect(textElement.text()).toBe(qty.toString());
    });


    it('Call a onAdd when + is clicked', async () => {
        const onAdd = vi.fn();
        const wrapper = mount(Stepper, {
            props: {
                startQty: 1,
                onAdd,
                onRemove: vi.fn(),
                id: 'test'
            }
        });
        const button = wrapper.find('#stepper-add-button-test');
        expect(button.exists()).toBe(true);
        await button.trigger('click');
        expect(onAdd).toHaveBeenCalled();
    });


    it('Call onRemove when - is clicked', async () => {
        const onRemove = vi.fn();
        const wrapper = mount(Stepper, {
            props: {
                startQty: 1,
                onAdd: vi.fn(),
                onRemove,
                id: 'test'
            }
        });
        const button = wrapper.find('#stepper-remove-button-test');
        expect(button.exists()).toBe(true);
        await button.trigger('click');
        expect(onRemove).toHaveBeenCalled();
    });


});