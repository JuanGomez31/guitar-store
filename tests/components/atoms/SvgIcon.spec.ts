import {mount} from '@vue/test-utils'
import SvgIcon from '@components/atoms/Icon/SvgIcon.vue'

describe('SvgIcon Attom test', () => {

    const IMAGE_NAME = 'cart';
    const ALT_DESCRIPTION = 'cart';
    const BASE_CLASS = 'icon';

    it('Renders the image with the correct name', () => {

        const wrapper = mount(SvgIcon, {
            props: {
                name: IMAGE_NAME,
                alt: ALT_DESCRIPTION,
            },
        })

        const img = wrapper.get('img')
        expect(img.attributes('src')).toBe(`/icons/${IMAGE_NAME}.svg`)
        expect(img.attributes('alt')).toBe(ALT_DESCRIPTION)
        expect(img.classes()).toContain(BASE_CLASS)
    })


    it('Can render without alt', () => {
        const wrapper = mount(SvgIcon, {
            props: {
                name: IMAGE_NAME,
            },
        })
        const img = wrapper.get('img')
        expect(img.attributes('src')).toBe(`/icons/${IMAGE_NAME}.svg`)
        expect(img.attributes('alt')).toBeUndefined()
    })


})