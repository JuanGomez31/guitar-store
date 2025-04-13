import {describe, expect, it, vi} from 'vitest'
import {mount} from '@vue/test-utils'
import Button from '@components/atoms/Button/Button.vue'

describe('Button Attom test', () => {

    const BASE_CLASS = 'button';

    it('Render as html button if it has no href', () => {
        const CLASS : string = 'button--primary';
        const TEXT : string = 'Click';
        const wrapper = mount(Button, {
            props: {
                classList: CLASS,
            },
            slots: {
                default: TEXT,
            },
        })

        expect(wrapper.element.tagName).toBe('BUTTON')
        expect(wrapper.classes()).toContain(BASE_CLASS)
        expect(wrapper.classes()).toContain(CLASS)
        expect(wrapper.text()).toBe(TEXT)
    })


    it('Render as to html if it has href', () => {
        const URL : string = 'https://google.com';
        const CLASS : string = 'button--primary';
        const TEXT : string = 'Google';
        const wrapper = mount(Button, {
            props: {
                href: URL,
                classList: CLASS,
            },
            slots: {
                default: 'Google',
            },
        })

        expect(wrapper.element.tagName).toBe('A')
        expect(wrapper.classes()).toContain(BASE_CLASS)
        expect(wrapper.attributes('href')).toBe(URL)
        expect(wrapper.classes()).toContain(CLASS)
        expect(wrapper.text()).toBe(TEXT)
    })

    it('Call onClick if is a button', async () => {
        const CLASS = 'button--primary';
        const TEXT = 'Click';
        const onClick = vi.fn();
        const wrapper = mount(Button, {
            props: {
                classList: CLASS,
                onClick,
            },
            slots: {
                default: TEXT,
            },
        });
        await wrapper.trigger('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });


})
