import { describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';

import Button from './index';

describe('Button', () => {
    test('check button variants', () => {
        const variant = 'primary';
        const { container } = render(Button, { variant });
        const button = container.querySelector('button');
        expect(button.classList.contains(`btn-${variant}`)).toBeTruthy();
    });

    test('check button sizes', () => {
        const size = 'lg';
        const { container } = render(Button, { size });
        const button = container.querySelector('button');
        expect(button.classList.contains(`btn-${size}`)).toBeTruthy();
    });

    test('check button is active', () => {
        const { container } = render(Button, { active: true });
        const button = container.querySelector('button');
        expect(button.classList.contains(`active`)).toBeTruthy();
    });

    test('check button is loading', () => {
        const { container } = render(Button, { loading: true });
        const button = container.querySelector('button');
        expect(button.classList.contains(`loading`)).toBeTruthy();
    });

    test('check button block', () => {
        const { container } = render(Button, { block: true });
        const button = container.querySelector('button');
        expect(button.classList.contains(`btn-block`)).toBeTruthy();
    });

    test('check button to be a link', () => {
        const { container } = render(Button, { href: 'example.com' });
        const a = container.querySelector('a');
        expect(a).not.toBeNull();
    });
});
