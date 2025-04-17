import {describe, expect, it, vi} from 'vitest'
import {mount} from '@vue/test-utils'
import FloatingCardButton from "@components/molecules/CardButton/FloatingCardButton.vue";


describe('Floating Card button test', () => {


    it('No render if it not have items', () => {
        const wrapper = mount(FloatingCardButton, {
            props: {
                totalItems: 0,
                onClick: vi.fn()
            }
        })
        expect(wrapper.find('button').exists()).toBe(false);
    })


    it('Render if it have items and show correct number', () =>
    {
        const items = 5;
        const wrapper = mount(FloatingCardButton, {
            props: {
                totalItems: items,
                onClick: vi.fn()
            }
        })
        const badge = wrapper.find('span.badge');
        expect(badge.exists()).toBe(true);
        expect(badge.text()).toBe(`${items}`);
    })


    it('Call onClick correctly', async () => {
        const onClick = vi.fn();
        const wrapper = mount(FloatingCardButton, {
            props: {
                totalItems: 1,
                onClick
            }
        })
        expect(wrapper.find('button').exists()).toBe(true);
        await wrapper.trigger('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });


})