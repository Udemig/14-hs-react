import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders, userEvent } from "../../../test/test-utils";
import { toast } from "react-toastify";
import ProductCard from "./product-card";

// Mock react-toastify
vi.mock("react-toastify", () => ({
  toast: {
    success: vi.fn(),
  },
}));

describe("ProductCard Component", () => {
  const mockProduct = {
    id: 1,
    name: "Çikolatalı Dondurma",
    price: 25,
    unit: "top",
    imageUrl: "https://example.com/chocolate.jpg",
    accent: "from-amber-400 to-orange-500",
  };

  it("should return null when product is not provided", () => {
    const { container } = renderWithProviders(<ProductCard product={null} />);
    expect(container.firstChild).toBeNull();
  });

  it("should change serving option when clicked", async () => {
    const user = userEvent.setup();
    renderWithProviders(<ProductCard product={mockProduct} />);

    const kulahButton = screen.getByRole("button", {
      name: /Çikolatalı Dondurma için Külah seç/i,
    });
    const bardakButton = screen.getByRole("button", {
      name: /Çikolatalı Dondurma için Bardakta seç/i,
    });

    // Initial state - Külah should be selected
    expect(kulahButton).toHaveAttribute("aria-pressed", "true");
    expect(bardakButton).toHaveAttribute("aria-pressed", "false");

    // Click Bardakta option
    await user.click(bardakButton);

    // Bardakta should now be selected
    expect(kulahButton).toHaveAttribute("aria-pressed", "false");
    expect(bardakButton).toHaveAttribute("aria-pressed", "true");

    // Click back to Külah
    await user.click(kulahButton);

    // Külah should be selected again
    expect(kulahButton).toHaveAttribute("aria-pressed", "true");
    expect(bardakButton).toHaveAttribute("aria-pressed", "false");
  });

  it("should dispatch addToBasket action when add to cart button is clicked", async () => {
    const user = userEvent.setup();
    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />
    );

    const addToCartButton = screen.getByRole("button", {
      name: /Çikolatalı Dondurma sepete ekle/i,
    });

    // Initial basket state should be empty
    expect(store.getState().basket.items).toHaveLength(0);
    expect(store.getState().basket.totalQuantity).toBe(0);

    // Click add to cart
    await user.click(addToCartButton);

    // Basket should now have one item
    const basketState = store.getState().basket;
    expect(basketState.items).toHaveLength(1);
    expect(basketState.totalQuantity).toBe(1);
    expect(basketState.items[0]).toMatchObject({
      productId: mockProduct.id,
      name: mockProduct.name,
      price: mockProduct.price,
      serving: "Külah",
      quantity: 1,
    });
  });

  it("should show toast notification when item is added to cart", async () => {
    const user = userEvent.setup();
    renderWithProviders(<ProductCard product={mockProduct} />);

    const addToCartButton = screen.getByRole("button", {
      name: /Çikolatalı Dondurma sepete ekle/i,
    });

    // Click add to cart
    await user.click(addToCartButton);

    // Toast should be called with success message
    expect(toast.success).toHaveBeenCalledWith(
      "Çikolatalı Dondurma sepete eklendi! (Külah)"
    );
  });

  it("should add item with correct serving option selected", async () => {
    const user = userEvent.setup();
    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />
    );

    // Select Bardakta option
    const bardakButton = screen.getByRole("button", {
      name: /Çikolatalı Dondurma için Bardakta seç/i,
    });
    await user.click(bardakButton);

    // Click add to cart
    const addToCartButton = screen.getByRole("button", {
      name: /Çikolatalı Dondurma sepete ekle/i,
    });
    await user.click(addToCartButton);

    // Item should be added with Bardakta serving
    const basketState = store.getState().basket;
    expect(basketState.items[0].serving).toBe("Bardakta");

    // Toast should show correct serving option
    expect(toast.success).toHaveBeenCalledWith(
      "Çikolatalı Dondurma sepete eklendi! (Bardakta)"
    );
  });

  it("should add multiple items with different serving options", async () => {
    const user = userEvent.setup();
    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />
    );

    const addToCartButton = screen.getByRole("button", {
      name: /Çikolatalı Dondurma sepete ekle/i,
    });

    // Add with Külah (default)
    await user.click(addToCartButton);

    // Switch to Bardakta and add
    const bardakButton = screen.getByRole("button", {
      name: /Çikolatalı Dondurma için Bardakta seç/i,
    });
    await user.click(bardakButton);
    await user.click(addToCartButton);

    // Should have 2 different items in basket
    const basketState = store.getState().basket;
    expect(basketState.items).toHaveLength(2);
    expect(basketState.totalQuantity).toBe(2);
    expect(basketState.items[0].serving).toBe("Külah");
    expect(basketState.items[1].serving).toBe("Bardakta");
  });

  it("should increase quantity when same item is added again", async () => {
    const user = userEvent.setup();
    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />
    );

    const addToCartButton = screen.getByRole("button", {
      name: /Çikolatalı Dondurma sepete ekle/i,
    });

    // Add same item twice
    await user.click(addToCartButton);
    await user.click(addToCartButton);

    // Should have 1 item with quantity 2
    const basketState = store.getState().basket;
    expect(basketState.items).toHaveLength(1);
    expect(basketState.items[0].quantity).toBe(2);
    expect(basketState.totalQuantity).toBe(2);
  });
});
