import { describe, expect } from "vitest";
import { queryByText, render, screen } from "./test-utils";
import CategorySection from "../features/landing/components/category-section";
import { mockProducts } from "../utils/constants";

// Çocuk componentleri mock'luyoruz
vi.mock("../features/landing/components/loading-skeleton", () => ({
  default: () => <div>Loading</div>,
}));

vi.mock("../features/landing/components/error-message", () => ({
  default: ({ message }) => <div>{message}</div>,
}));

vi.mock("../features/landing/components/product-card", () => ({
  default: ({ product }) => <div>{product.name}</div>,
}));

describe("Category Section Component", () => {
  it("ürünler yüklenirken loadingSkeleton görüntülenir", () => {
    render(<CategorySection products={[]} loading={true} error={null} />);

    screen.getByText("Loading");
  });

  it("hata durumunda error message görüntülenir", () => {
    render(
      <CategorySection products={[]} loading={false} error="Zaman aşımı" />
    );

    // hata mesajı ekranda mı?
    screen.getByText("Zaman aşımı");

    // yükleniyor ekrandan gitti mi?
    expect(screen.queryByText("Loading")).toBeNull();
  });

  it("yüklenme bittikten sonra hiç ürün yoksa uyarı mesajı görüntülenir", () => {
    render(<CategorySection products={[]} loading={false} error={null} />);

    screen.getByText("Henüz ürün bulunmuyor");
  });

  it("yüklenme bittikten sonra ürünler varsa product cardlar görüntülenir", () => {
    render(
      <CategorySection products={mockProducts} loading={false} error={null} />
    );

    mockProducts.forEach((product) => {
      screen.getByText(product.name);
    });
  });
});
