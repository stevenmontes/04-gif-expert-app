import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Tests GifGrid', () => {
    const category = "One Punch"

    test('should show loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}></GifGrid>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('should show items when they were loaded in useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://hola.jpg'
            },
            {
                id: 'ABCD',
                title: 'Goku',
                url: 'https://hola.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}></GifGrid>);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
})