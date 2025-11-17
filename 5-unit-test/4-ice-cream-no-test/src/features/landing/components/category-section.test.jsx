import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders, userEvent } from "../../../test/test-utils";
import CategorySection from "./category-section";

// Mock child components
vi.mock("./loading-skeleton", () => ({
  default: () => <div data-testid="loading-skeleton">Loading...</div>,
}));

vi.mock("./error-message", () => ({
  default: ({ message }) => <div data-testid="error-message">{message}</div>,
}));

vi.mock("./product-card", () => ({
  default: ({ product }) => (
    <div data-testid={`product-card-${product.id}`}>{product.name}</div>
  ),
}));

describe("CategorySection Component", () => {
  const mockViewOptions = [
    { id: "grid", label: "Grid View" },
    { id: "rows", label: "Row View" },
    { id: "showcase", label: "Showcase View" },
  ];

  const mockProducts = [
    {
      id: 1,
      name: "Çikolatalı Dondurma",
      price: 25,
      unit: "top",
      imageUrl: "https://example.com/chocolate.jpg",
      accent: "from-amber-400 to-orange-500",
    },
    {
      id: 2,
      name: "Vanilyalı Dondurma",
      price: 20,
      unit: "top",
      imageUrl: "https://example.com/vanilla.jpg",
      accent: "from-yellow-200 to-amber-300",
    },
  ];

  it("should show loading skeleton when loading is true", () => {
    renderWithProviders(
      <CategorySection
        products={[]}
        viewOptions={mockViewOptions}
        loading={true}
        error={null}
      />
    );

    expect(screen.getByTestId("loading-skeleton")).toBeInTheDocument();
    expect(screen.queryByTestId("error-message")).not.toBeInTheDocument();
  });

  it("should show error message when error is provided", () => {
    const errorMessage = "Failed to load products";

    renderWithProviders(
      <CategorySection
        products={[]}
        viewOptions={mockViewOptions}
        loading={false}
        error={errorMessage}
      />
    );

    expect(screen.getByTestId("error-message")).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.queryByTestId("loading-skeleton")).not.toBeInTheDocument();
  });

  it("should show empty state when no products are available", () => {
    renderWithProviders(
      <CategorySection
        products={[]}
        viewOptions={mockViewOptions}
        loading={false}
        error={null}
      />
    );

    expect(screen.getByText("Henüz ürün bulunmuyor")).toBeInTheDocument();
    expect(
      screen.getByText("Yakında yeni lezzetler eklenecek")
    ).toBeInTheDocument();
  });

  it("should render product cards when products are available", () => {
    renderWithProviders(
      <CategorySection
        products={mockProducts}
        viewOptions={mockViewOptions}
        loading={false}
        error={null}
      />
    );

    expect(screen.getByTestId("product-card-1")).toBeInTheDocument();
    expect(screen.getByTestId("product-card-2")).toBeInTheDocument();
    expect(screen.getByText("Çikolatalı Dondurma")).toBeInTheDocument();
    expect(screen.getByText("Vanilyalı Dondurma")).toBeInTheDocument();
  });

  it("should switch between view options when clicked", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <CategorySection
        products={mockProducts}
        viewOptions={mockViewOptions}
        loading={false}
        error={null}
      />
    );

    const gridButton = screen.getByRole("button", {
      name: /Grid View görünümünü seç/i,
    });
    const rowsButton = screen.getByRole("button", {
      name: /Row View görünümünü seç/i,
    });
    const showcaseButton = screen.getByRole("button", {
      name: /Showcase View görünümünü seç/i,
    });

    // Grid should be active by default (first option)
    expect(gridButton).toHaveClass("is-active");
    expect(rowsButton).not.toHaveClass("is-active");
    expect(showcaseButton).not.toHaveClass("is-active");

    // Click rows view
    await user.click(rowsButton);
    expect(gridButton).not.toHaveClass("is-active");
    expect(rowsButton).toHaveClass("is-active");
    expect(showcaseButton).not.toHaveClass("is-active");

    // Click showcase view
    await user.click(showcaseButton);
    expect(gridButton).not.toHaveClass("is-active");
    expect(rowsButton).not.toHaveClass("is-active");
    expect(showcaseButton).toHaveClass("is-active");

    // Click back to grid
    await user.click(gridButton);
    expect(gridButton).toHaveClass("is-active");
    expect(rowsButton).not.toHaveClass("is-active");
    expect(showcaseButton).not.toHaveClass("is-active");
  });

  it("should disable view buttons when loading", () => {
    renderWithProviders(
      <CategorySection
        products={[]}
        viewOptions={mockViewOptions}
        loading={true}
        error={null}
      />
    );

    const gridButton = screen.getByRole("button", {
      name: /Grid View görünümünü seç/i,
    });
    const rowsButton = screen.getByRole("button", {
      name: /Row View görünümünü seç/i,
    });
    const showcaseButton = screen.getByRole("button", {
      name: /Showcase View görünümünü seç/i,
    });

    expect(gridButton).toBeDisabled();
    expect(rowsButton).toBeDisabled();
    expect(showcaseButton).toBeDisabled();
  });

  it("should not show products when loading", () => {
    renderWithProviders(
      <CategorySection
        products={mockProducts}
        viewOptions={mockViewOptions}
        loading={true}
        error={null}
      />
    );

    expect(screen.queryByTestId("product-card-1")).not.toBeInTheDocument();
    expect(screen.queryByTestId("product-card-2")).not.toBeInTheDocument();
  });

  it("should not show products when there is an error", () => {
    renderWithProviders(
      <CategorySection
        products={mockProducts}
        viewOptions={mockViewOptions}
        loading={false}
        error="Something went wrong"
      />
    );

    expect(screen.queryByTestId("product-card-1")).not.toBeInTheDocument();
    expect(screen.queryByTestId("product-card-2")).not.toBeInTheDocument();
  });

  it("should default to grid view when no view options provided", () => {
    renderWithProviders(
      <CategorySection
        products={mockProducts}
        viewOptions={[]}
        loading={false}
        error={null}
      />
    );

    // Should still render products even with no view options
    expect(screen.getByTestId("product-card-1")).toBeInTheDocument();
    expect(screen.getByTestId("product-card-2")).toBeInTheDocument();
  });

  it("should handle default props correctly", () => {
    renderWithProviders(<CategorySection />);

    // With all defaults, should show empty state
    expect(screen.getByText("Henüz ürün bulunmuyor")).toBeInTheDocument();
  });
});
