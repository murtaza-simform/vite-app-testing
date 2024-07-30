import ProductImageGallery from "../../components/ProductImageGallery";
import { render, screen } from "../../utils/test-utils";

describe("ProductImageGallery", () => {
  it("should render nothing if imageUrls array is empty", () => {
    const imageUrls: string[] = [];
    const { container } = render(<ProductImageGallery imageUrls={imageUrls} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should render a list of images", () => {
    const imageUrls = ["url1", "url2"];

    render(<ProductImageGallery imageUrls={imageUrls} />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
