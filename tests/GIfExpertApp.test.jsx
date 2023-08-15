import { render, renderHook, screen, fireEvent, waitFor } from "@testing-library/react"
import { GifExpertApp } from '../src/GifExpertApp'
import { useState } from 'react';

describe('Tests of GifExpertApp', () => {

    test('should add a new category to the list when onAddCategory is called with a new category', () => {
        render(<GifExpertApp></GifExpertApp>);
        const newCategory = 'Naruto';
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form);

        const categories = screen.getAllByRole('heading', { level: 3 });
        expect(categories).toHaveLength(3);
        expect(categories[0].innerHTML).toBe(newCategory);
    })
})