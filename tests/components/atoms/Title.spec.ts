import {mount} from '@vue/test-utils'
import Title from '@components/atoms/Title/Title.vue'

describe('Title Atom test', () => {

    it('Renders a level 1 heading by default', () => {
        const wrapper = mount(Title)
        expect(wrapper.element.tagName).toBe('H1')
    })

    it('Renders the correct heading tag based on the level prop', () => {
        const wrapper = mount(Title, {
            props: { level: 3 }
        })
        expect(wrapper.element.tagName).toBe('H3')
    })

    it('adds a custom CSS class', () => {
        const CLASS = 'title--primary';
        const wrapper = mount(Title, {
            props: { cssClass: CLASS }
        })
        expect(wrapper.classes()).toContain(CLASS);
    })

    it('Renders the default slot content', () => {
        const SLOT = 'Hello World';
        const wrapper = mount(Title, {
            slots: {
                default: SLOT
            }
        })
        expect(wrapper.text()).toBe(SLOT)
    })


    it('Validates level prop correctly', () => {
        const invalidWrapper = mount(Title, {
            props: { level: 7 }
        })
        expect(invalidWrapper.element.tagName).toBe('H1')
    })

})