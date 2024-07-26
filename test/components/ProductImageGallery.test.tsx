import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";
import "@testing-library/jest-dom/vitest";

describe('ProductImageGallery', () => {
    it('should render nothing if imageUrls array is empty', () => {
        const imageUrls = [];
        const {container} = render(<ProductImageGallery imageUrls={imageUrls} />);
        expect(container).toBeEmptyDOMElement();
    });

    it('should render a list of images', () => {
        const imageUrls = ['url1', 'url2'];

        render(<ProductImageGallery imageUrls={imageUrls} />);
        const images = screen.getAllByRole("img");
        expect(images).toHaveLength(2);
        imageUrls.forEach((url, index) => {
            expect(images[index]).toHaveAttribute('src', url)
        })
    })
})
