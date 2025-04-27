import {describe, expect, it, vi} from 'vitest';
import {mount} from '@vue/test-utils';
import PageContent from '@components/organism/Content/PageContent.vue';


describe('PageContent Organi', () => {
    const mockOnClick = vi.fn();


    vi.mock('@entities/guitar/guitar.service', () => (
        {
            guitarsData: [
                {
                    id: 1,
                    name: 'Stratocaster',
                    image: 'stratocaster',
                    description: 'A classic guitar.',
                    price: 1299,
                }
            ],
        }));

    const factory = () =>
        mount(PageContent, {
            props: {
                onClick: mockOnClick,
            },
            global: {
                stubs: {
                    Title: false,
                    GuitarCard: true,
                },
            },
        });

    it('Renders correct number of GuitarCards', () => {
        const wrapper = factory();
        const guitarCards = wrapper.findAllComponents({ name: 'GuitarCard' });
        expect(guitarCards.length).toBe(1);
    });

    it('Passes the onClick prop to GuitarCard', () => {
        const wrapper = factory();
        const card = wrapper.findComponent({ name: 'GuitarCard' });
        expect(card.exists()).toBe(true);
        expect(card.props('onClick')).toBe(mockOnClick);
    });
});
