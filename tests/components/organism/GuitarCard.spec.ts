import {describe, expect, it, vi} from 'vitest';
import {mount} from '@vue/test-utils';
import GuitarCard from '@components/organism/Guitar/GuitarCard.vue';
import {GUITAR_MOCK} from "../../mocks/GuitarMock.ts";

describe('GuitarCard Organism Tests', () => {

    const mockOnClick = vi.fn();

    const factory = () =>
        mount(GuitarCard, {
            props: {
                guitar: GUITAR_MOCK,
                onClick: mockOnClick,
            },
        });

    const generateUrl = (image: string) => `/img/guitars/${image}.jpg`;

    it('Render the guitar name, description, price and image correctly', () => {
        const wrapper = factory();
        expect(wrapper.text()).toContain(GUITAR_MOCK.name);
        expect(wrapper.text()).toContain(GUITAR_MOCK.description);
        expect(wrapper.text()).toContain(GUITAR_MOCK.price.toString());
        expect(wrapper.find('img').attributes('src')).toContain(generateUrl(GUITAR_MOCK.image));
    });

    it('Calls on click when button is clicked', async () => {
        const wrapper = factory();
        await wrapper.find('button').trigger('click');
        expect(mockOnClick).toHaveBeenCalledWith(1);
    });
});
