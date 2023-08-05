import { fireEvent, render } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('test on AddCategory', () => {
    test('should change the value of the input', () => {
        render(<AddCategory onNewCategory={() => { }}></AddCategory>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } });

        expect(input.value).toBe('Saitama');
    })
})