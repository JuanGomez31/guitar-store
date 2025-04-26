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
            }
        });
        expect(wrapper.text()).toContain(qty.toString());
    });


    it('Call a onAdd when + is clicked', async () => {
        const onAdd = vi.fn();
        const wrapper = mount(Stepper, {
            props: {
                startQty: 1,
                onAdd,
                onRemove: vi.fn(),
            }
        });
        await wrapper.findAll('button')[1].trigger('click');
        expect(onAdd).toHaveBeenCalled();
    });


    it('Call onRemove when - is clicked', async () => {
        const onRemove = vi.fn();
        const wrapper = mount(Stepper, {
            props: {
                startQty: 1,
                onAdd: vi.fn(),
                onRemove
            }
        });
        await wrapper.findAll('button')[0].trigger('click');
        expect(onRemove).toHaveBeenCalled();
    });


});