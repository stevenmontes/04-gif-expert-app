import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Tests GifGrid', () => {
    const category = "One Punch"

    test('should show loading', () => {
        render(<GifGrid category={category}></GifGrid>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('should show items when they were loaded in useFetchGifs', () => {

    });
})