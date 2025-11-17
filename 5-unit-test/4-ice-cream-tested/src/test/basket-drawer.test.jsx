import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderWithProviders, screen, userEvent } from "./test-utils";
import BasketDrawer from "../features/landing/components/basket-drawer";
import { mockBasket } from "../utils/constants";
import { toast } from "react-toastify";

// react-toastify fonksiyonını mockla
vi.mock("react-toastify", () => ({
  toast: {
    success: vi.fn(),
    info: vi.fn(),
  },
}));

describe("Basket Drawer Component", () => {
  const mockOnClose = vi.fn();

  // her testten önce mockOnClose fonksiyonu temizlensin
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Görünürülük, açma / kapatma", () => {
    it("isOpen false ise drawer gizli olmalı", () => {
      renderWithProviders(<BasketDrawer isOpen={false} onClose={null} />);

      const drawer = screen.getByRole("dialog");
      expect(drawer).toHaveClass("translate-x-full");
    });

    it("isOpen true ise drawer görünür olmalı", () => {
      renderWithProviders(<BasketDrawer isOpen={true} onClose={null} />);

      const drawer = screen.getByRole("dialog");
      expect(drawer).toHaveClass("translate-x-0");
      expect(drawer).not.toHaveClass("translate-x-full");
    });

    it("X butonuna tıklanınca drawer kapatılmalı", async () => {
      const user = userEvent.setup();
      renderWithProviders(<BasketDrawer isOpen={true} onClose={mockOnClose} />);

      // x butonunu al
      const closeBtn = screen.getByRole("button", { name: /sepeti kapat/i });

      // x butonuna tıkla
      await user.click(closeBtn);

      // mockOnClose fonksiyonu bir kere çağrıldı mı?
      expect(mockOnClose).toHaveBeenCalledOnce();
    });

    it("Backdrop'a tıklanınca drawer kapatılmalı", async () => {
      const user = userEvent.setup();
      renderWithProviders(<BasketDrawer isOpen={true} onClose={mockOnClose} />);

      // drawer'ın arkaplanını al
      const backdrop = screen.getByTestId("backdrop");

      // arkaplanına tıkla
      await user.click(backdrop);

      // mockOnClose fonksiyonu bir kere çağrıldı mı?
      expect(mockOnClose).toHaveBeenCalledOnce();
    });
  });

  describe("Sepet içeriği", () => {
    it("sepet boşsa boş mesajı görünür olmalı", () => {
      renderWithProviders(<BasketDrawer isOpen={true} onClose={mockOnClose} />);

      screen.getByText("Sepetiniz boş");
    });

    it("sepet doluysa ürünlerin bilgileri listelenmelidir", () => {
      renderWithProviders(<BasketDrawer isOpen={true} onClose={null} />, {
        preloadedState: mockBasket,
      });

      // sepetteki her ürürnün isim/fotoğraf vb. bilgileri ekrana basılır
      mockBasket.basket.items.forEach((item) => {
        screen.getByText(item.name);
        screen.getByText(item.quantity);
        screen.getByText(item.serving);
        screen.getByText(new RegExp(`${item.totalPrice}`, "i"));
        const image = screen.getByAltText(item.name);
        expect(image).toHaveAttribute("src", item.imageUrl);
      });
    });

    it("toplam ürün sayısı ve toplam fiyat doğru görüntülenir", () => {
      renderWithProviders(<BasketDrawer isOpen={true} onClose={null} />, {
        preloadedState: mockBasket,
      });

      // toplam ürün sayısı elementi doğru mu
      screen.getByText(`(${mockBasket.basket.totalQuantity} ürün)`);

      // toplam fiyat elementi doğru mu
      screen.getByText(`₺${mockBasket.basket.totalAmount.toFixed(2)}`);
    });
  });

  describe("Miktar artırma / azaltma / silme / onaylama", () => {
    it("+ butonuna tıklanınca miktar artırılır", async () => {
      const user = userEvent.setup();

      const { store } = renderWithProviders(
        <BasketDrawer isOpen={true} onClose={null} />,
        {
          preloadedState: mockBasket,
        }
      );

      // + butonunu al
      const increaseBtn = screen.getByRole("button", {
        name: /1-külah miktarını artır/i,
      });

      // ürünün sepetteki miktarı 2 dir
      expect(store.getState().basket.items[0].quantity).toBe(2);

      // + butonuna tıkla
      await user.dblClick(increaseBtn);

      // ürünün sepetteki miktarı 3 tür
      expect(store.getState().basket.items[0].quantity).toBe(4);
    });

    it("- butonuna tıklanınca miktar azaltılır/kaldırılır", async () => {
      const user = userEvent.setup();
      const { store } = renderWithProviders(
        <BasketDrawer isOpen={true} onClose={null} />,
        { preloadedState: mockBasket }
      );

      // gerekli elementleri al
      const decreaseBtn = screen.getByRole("button", {
        name: /1-külah miktarını azalt/i,
      });

      //  ürünün sepetteki miktarı 2 dir ve sepette 2 ürün var
      expect(store.getState().basket.items[0].quantity).toBe(2);
      expect(store.getState().basket.items).toHaveLength(2);

      // - butonuna tıkla
      await user.click(decreaseBtn);

      //  ürünün sepetteki miktarı 1 dir
      expect(store.getState().basket.items[0].quantity).toBe(1);

      // - butonuna tıkla
      await user.click(decreaseBtn);

      // ürün sepetten kaldırılmıştır
      expect(store.getState().basket.items).toHaveLength(1);
    });

    it("sil butonuna tıklanınca ürün sepetten kaldırılır", async () => {
      const user = userEvent.setup();
      const { store } = renderWithProviders(
        <BasketDrawer isOpen={true} onClose={null} />,
        { preloadedState: mockBasket }
      );

      // gerekli elementleri al
      const removeBtn1 = screen.getByRole("button", {
        name: "1-Külah ürününü sepetten çıkar",
      });
      const removeBtn2 = screen.getByRole("button", {
        name: "2-Bardakta ürününü sepetten çıkar",
      });

      // sepette 2 ürün vardır
      expect(store.getState().basket.items).toHaveLength(2);

      // ilk ürünün sil butonunu tıkla
      await user.click(removeBtn1);

      // sepette 1 ürün kalmıştır
      expect(store.getState().basket.items).toHaveLength(1);

      // ikinci ürünün sil butonunu tıkla
      await user.click(removeBtn2);

      // sepette 0 ürün kalmıştır
      expect(store.getState().basket.items).toHaveLength(0);

      // toast.info fonksiyonu çağrılmış mı?
      expect(toast.info).toHaveBeenCalledWith("Ürün sepetten çıkarıldı");
    });

    it("siparişi onaylama butonuna tıklanınca sepet temizlenir", async () => {
      const user = userEvent.setup();
      const { store } = renderWithProviders(
        <BasketDrawer isOpen={true} onClose={mockOnClose} />,
        { preloadedState: mockBasket }
      );

      // sipariş onaylama butonunu al
      const confirmBtn = screen.getByRole("button", {
        name: "Siparişi onayla",
      });

      // butona tıkla
      await user.click(confirmBtn);

      // store'un güncel değerini kontrol et
      const state = store.getState();
      expect(state.basket.items).toHaveLength(0);
      expect(state.basket.totalQuantity).toBe(0);
      expect(state.basket.totalAmount).toBe(0);

      // drawer'ı kapatıcak onClose fonksiyonu çağrılmış mı?
      expect(mockOnClose).toHaveBeenCalledOnce();

      // toast.success fonksiyonu çağrılmış mı?
      expect(toast.success).toHaveBeenCalledWith(
        "Siparişiniz alındı! Teşekkür ederiz 🎉"
      );
    });
  });
});
