import type {Guitar} from '@entities/guitar/guitar.model.ts';

export const GUITAR_MOCK = {
    id: 1,
    name: 'Stratocaster',
    image: 'stratocaster',
    description: 'A classic guitar.',
    price: 1299,
} satisfies Guitar;