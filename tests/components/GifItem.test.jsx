import { render } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Tests of GifItem', () => {
    test('should match with the snapshot', () => {
        const image = {
            title: 'title',
            url: 'url'
        }
        const { container } = render(<GifItem {...image}></GifItem>);
        expect(container).toMatchSnapshot();
    })
})