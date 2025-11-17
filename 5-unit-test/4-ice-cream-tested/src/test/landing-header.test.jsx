import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, userEvent } from "./test-utils";
import LandingHeader from "../features/landing/components/landing-header";

describe("Landing Header Component", () => {
  const mockOnOpenBasket = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Sepet sayacı (cartCount)", () => {
    it("cartCount prop'u 0 ise sepet sayacı 0 görüntülenir", () => {
      render(<LandingHeader cartCount={0} onOpenBasket={mockOnOpenBasket} />);

      const cartBadge = screen.getByText("0");
      expect(cartBadge).toBeInTheDocument();
    });

    it("cartCount prop'u farklı değerlerde doğru görüntülenir", () => {
      const { rerender } = render(
        <LandingHeader cartCount={5} onOpenBasket={mockOnOpenBasket} />
      );

      expect(screen.getByText("5")).toBeInTheDocument();

      rerender(
        <LandingHeader cartCount={10} onOpenBasket={mockOnOpenBasket} />
      );

      expect(screen.getByText("10")).toBeInTheDocument();
    });

    it("cartCount prop'u gönderilmediğinde varsayılan olarak 0 görüntülenir", () => {
      render(<LandingHeader onOpenBasket={mockOnOpenBasket} />);

      expect(screen.getByText("0")).toBeInTheDocument();
    });
  });

  describe("Sepet butonu tıklama", () => {
    it("sepet butonuna tıklanınca onOpenBasket fonksiyonu çağrılır", async () => {
      const user = userEvent.setup();
      render(<LandingHeader cartCount={3} onOpenBasket={mockOnOpenBasket} />);

      const cartButton = screen.getByRole("button", { name: /sepeti aç/i });

      await user.click(cartButton);

      expect(mockOnOpenBasket).toHaveBeenCalledOnce();
    });

    it("sepet butonuna birden fazla tıklanınca onOpenBasket her seferinde çağrılır", async () => {
      const user = userEvent.setup();
      render(<LandingHeader cartCount={2} onOpenBasket={mockOnOpenBasket} />);

      const cartButton = screen.getByRole("button", { name: /sepeti aç/i });

      await user.click(cartButton);
      await user.click(cartButton);
      await user.click(cartButton);

      expect(mockOnOpenBasket).toHaveBeenCalledTimes(3);
    });
  });
});
