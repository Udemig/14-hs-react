import { describe, it, expect } from "vitest";
import ProductCard from "../features/landing/components/product-card";
import { renderWithProviders, screen, userEvent } from "./test-utils";
import { mockProduct } from "../utils/constants";

describe("Product Card Component", () => {
  it("ürün propu gönderilmediğinde null döner", () => {
    const { container } = renderWithProviders(<ProductCard product={null} />);

    expect(container.firstChild).toBeNull();
  });

  it("card üzerindeki ürün adı / fiyatı gibi bilgiler doğru listelenir", () => {
    renderWithProviders(<ProductCard product={mockProduct} />);

    // Ürün resim arkaplanı doğru renkte mi?
    const imageWrapper = screen.getByTestId("product-image");
    expect(imageWrapper).toHaveClass(mockProduct.accent);

    // Ürün resmi doğru görüntüleniyor mu?
    const productImage = screen.getByAltText(mockProduct.name);
    expect(productImage).toHaveAttribute("src", mockProduct.imageUrl);

    // ürünün adı doğru görüntüleniyor mu?
    screen.getByText(mockProduct.name);

    // ürünün fiyat ve birim bilgileri doğru görüntüleniyor mu?
    screen.getByText(`₺${mockProduct.price} / ${mockProduct.unit}`);
  });

  it("servis seçeneklerinden birine tıklanınca seçenek güncellenir", async () => {
    // userEvent kurulum
    const user = userEvent.setup();

    // component render
    renderWithProviders(<ProductCard product={mockProduct} />);

    // gerekli elementleri al
    const cornetBtn = screen.getByRole("button", { name: /külah/i }); // regex
    const cupBtn = screen.getByRole("button", { name: /bardakta/i }); // regex

    // külah butonu aktif mi?
    expect(cornetBtn).toHaveClass("bg-rose-600");

    // bardak butonu pasif mi?
    expect(cupBtn).toHaveClass("bg-white");

    // bardak butonuna tıkla
    await user.click(cupBtn);

    // külah butonu pasif mi?
    expect(cornetBtn).toHaveClass("bg-white");

    // bardak butonu aktif mi?
    expect(cupBtn).toHaveClass("bg-rose-600");

    // külah butonuna tıkla
    await user.click(cornetBtn);

    // külah butonu aktif mi?
    expect(cornetBtn).toHaveClass("bg-rose-600");

    // bardak butonu pasif mi?
    expect(cupBtn).toHaveClass("bg-white");
  });

  it("sepete ekle butonuna tıklanınca reducer'a haber gönderilir", async () => {
    const user = userEvent.setup();
    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />
    );

    // gerekli elementleri al
    const addToCartBtn = screen.getByRole("button", { name: /sepete ekle/i });

    // store'da sepet dizisi boştur
    expect(store.getState().basket.items).toHaveLength(0);
    expect(store.getState().basket.totalQuantity).toBe(0);

    // sepete ekle butonuna tıkla
    await user.click(addToCartBtn);

    // store'da sepet disizine 1 eleman eklenmiş olmalıdır
    const basket = store.getState().basket;
    expect(basket.items).toHaveLength(1);
    expect(basket.totalQuantity).toBe(1);
    expect(basket.totalAmount).toBe(mockProduct.price);
    expect(basket.items[0]).toMatchObject({
      productId: mockProduct.id,
      name: mockProduct.name,
      price: mockProduct.price,
      serving: "Külah",
      quantity: 1,
    });
  });

  it("aynı ürün farklı servis seçenekleriyle sepete eklenebilir", async () => {
    const user = userEvent.setup();
    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />
    );

    // gerekli elementleri al
    const cupBtn = screen.getByRole("button", { name: /bardakta/i });
    const addToCartBtn = screen.getByRole("button", { name: /sepete ekle/i });

    //  külahta sepete ekle
    await user.click(addToCartBtn);

    // bardakta butonun tıkla
    await user.click(cupBtn);

    // bardakta sepete ekle
    await user.click(addToCartBtn);

    // sepette 2 farklı ürün var mı?
    const basket = store.getState().basket;
    expect(basket.items).toHaveLength(2);
    expect(basket.totalQuantity).toBe(2);
    expect(basket.totalAmount).toBe(mockProduct.price * 2);
    expect(basket.items[0].serving).toBe("Külah");
    expect(basket.items[1].serving).toBe("Bardakta");
  });
});
