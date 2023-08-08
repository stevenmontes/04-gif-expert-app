import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('test on AddCategory', () => {
    test('should change the value of the input', () => {
        render(<AddCategory onNewCategory={() => { }}></AddCategory>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } });

        expect(input.value).toBe('Saitama');
    });

    test('should call the onNewCategory if the input has a value', () => {
        const inputValue = 'Saitama';

        render(<AddCategory onNewCategory={() => { }}></AddCategory>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
    });
})