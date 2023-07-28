import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Tests of GifItem', () => {
    const image = {
        title: 'title',
        url: 'http://localhost/ejemplo.com'
    };

    test('should match with the snapshot', () => {
        const { container } = render(<GifItem {...image}></GifItem>);
        expect(container).toMatchSnapshot();
    });

    test('should show the image and alt indicated', () => {
        render(<GifItem {...image}></GifItem>);
        //expect(screen.getByRole('img').src).toBe(image.url);
        //expect(screen.getByRole('img').alt).toBe(image.title);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(image.url);
        expect(alt).toBe(image.title);
    });

    test('should show the title', () => {
        render(<GifItem {...image}></GifItem>);
        expect(screen.getByText(image.title)).toBeTruthy();
    })
})