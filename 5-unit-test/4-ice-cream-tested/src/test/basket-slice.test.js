import { describe, expect, it } from "vitest";
import basketReducer, {
  addToBasket,
  removeFromBasket,
  increaseQuantity,
  decreaseQuantity,
  clearBasket,
} from "../store/basket-slice";
import { mockProduct } from "../utils/constants";

describe("Basket Slice", () => {
  const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  };

  describe("Initial State", () => {
    it("başlangıç durumu doğru olmalı", () => {
      const state = basketReducer(undefined, { type: "unknown" });
      expect(state).toEqual(initialState);
    });
  });

  describe("addToBasket", () => {
    it("yeni ürün sepete eklendiğinde items dizisine eklenir", () => {
      const newItem = {
        productId: mockProduct.id,
        name: mockProduct.name,
        price: mockProduct.price,
        serving: "Külah",
        imageUrl: mockProduct.imageUrl,
        accent: mockProduct.accent,
      };

      const state = basketReducer(initialState, addToBasket(newItem));

      expect(state.items).toHaveLength(1);
      expect(state.items[0]).toMatchObject({
        id: `${mockProduct.id}-Külah`,
        productId: mockProduct.id,
        name: mockProduct.name,
        price: mockProduct.price,
        serving: "Külah",
        quantity: 1,
        totalPrice: mockProduct.price,
        imageUrl: mockProduct.imageUrl,
        accent: mockProduct.accent,
      });
      expect(state.totalQuantity).toBe(1);
      expect(state.totalAmount).toBe(mockProduct.price);
    });

    it("aynı ürün ve servis seçeneği tekrar eklendiğinde miktar artar", () => {
      const newItem = {
        productId: mockProduct.id,
        name: mockProduct.name,
        price: mockProduct.price,
        serving: "Külah",
        imageUrl: mockProduct.imageUrl,
        accent: mockProduct.accent,
      };

      // İlk ekleme
      let state = basketReducer(initialState, addToBasket(newItem));

      // İkinci ekleme
      state = basketReducer(state, addToBasket(newItem));

      expect(state.items).toHaveLength(1);
      expect(state.items[0].quantity).toBe(2);
      expect(state.items[0].totalPrice).toBe(mockProduct.price * 2);
      expect(state.totalQuantity).toBe(2);
      expect(state.totalAmount).toBe(mockProduct.price * 2);
    });

    it("aynı ürün farklı servis seçeneğiyle eklendiğinde yeni item olarak eklenir", () => {
      const itemKulah = {
        productId: mockProduct.id,
        name: mockProduct.name,
        price: mockProduct.price,
        serving: "Külah",
        imageUrl: mockProduct.imageUrl,
        accent: mockProduct.accent,
      };

      const itemBardakta = {
        productId: mockProduct.id,
        name: mockProduct.name,
        price: mockProduct.price,
        serving: "Bardakta",
        imageUrl: mockProduct.imageUrl,
        accent: mockProduct.accent,
      };

      // Külah ekle
      let state = basketReducer(initialState, addToBasket(itemKulah));

      // Bardakta ekle
      state = basketReducer(state, addToBasket(itemBardakta));

      expect(state.items).toHaveLength(2);
      expect(state.items[0].serving).toBe("Külah");
      expect(state.items[1].serving).toBe("Bardakta");
      expect(state.totalQuantity).toBe(2);
      expect(state.totalAmount).toBe(mockProduct.price * 2);
    });

    it("farklı ürünler sepete eklendiğinde her biri ayrı item olarak eklenir", () => {
      const item1 = {
        productId: "1",
        name: "Ürün 1",
        price: 100,
        serving: "Külah",
        imageUrl: "url1",
        accent: "accent1",
      };

      const item2 = {
        productId: "2",
        name: "Ürün 2",
        price: 200,
        serving: "Külah",
        imageUrl: "url2",
        accent: "accent2",
      };

      let state = basketReducer(initialState, addToBasket(item1));
      state = basketReducer(state, addToBasket(item2));

      expect(state.items).toHaveLength(2);
      expect(state.totalQuantity).toBe(2);
      expect(state.totalAmount).toBe(300);
    });
  });

  describe("removeFromBasket", () => {
    it("mevcut item sepetten kaldırılır", () => {
      const newItem = {
        productId: mockProduct.id,
        name: mockProduct.name,
        price: mockProduct.price,
        serving: "Külah",
        imageUrl: mockProduct.imageUrl,
        accent: mockProduct.accent,
      };

      // Önce item ekle
      let state = basketReducer(initialState, addToBasket(newItem));
      state = basketReducer(state, addToBasket(newItem)); // quantity = 2

      // Item'ı kaldır
      state = basketReducer(state, removeFromBasket(`${mockProduct.id}-Külah`));

      expect(state.items).toHaveLength(0);
      expect(state.totalQuantity).toBe(0);
      expect(state.totalAmount).toBe(0);
    });

    it("olmayan item kaldırılmaya çalışıldığında state değişmez", () => {
      const newItem = {
        productId: mockProduct.id,
        name: mockProduct.name,
        price: mockProduct.price,
        serving: "Külah",
        imageUrl: mockProduct.imageUrl,
        accent: mockProduct.accent,
      };

      let state = basketReducer(initialState, addToBasket(newItem));
      const previousState = { ...state };

      // Olmayan item ID'si ile kaldırma denemesi
      state = basketReducer(state, removeFromBasket("non-existent-id"));

      expect(state).toEqual(previousState);
    });

    it("birden fazla item varsa sadece belirtilen item kaldırılır", () => {
      const item1 = {
        productId: "1",
        name: "Ürün 1",
        price: 100,
        serving: "Külah",
        imageUrl: "url1",
        accent: "accent1",
      };

      const item2 = {
        productId: "2",
        name: "Ürün 2",
        price: 200,
        serving: "Külah",
        imageUrl: "url2",
        accent: "accent2",
      };

      let state = basketReducer(initialState, addToBasket(item1));
      state = basketReducer(state, addToBasket(item2));

      // Sadece item1'i kaldır
      state = basketReducer(state, removeFromBasket("1-Külah"));

      expect(state.items).toHaveLength(1);
      expect(state.items[0].productId).toBe("2");
      expect(state.totalQuantity).toBe(1);
      expect(state.totalAmount).toBe(200);
    });
  });

  describe("increaseQuantity", () => {
    it("mevcut item'ın miktarı artırılır", () => {
      const newItem = {
        productId: mockProduct.id,
        name: mockProduct.name,
        price: mockProduct.price,
        serving: "Külah",
        imageUrl: mockProduct.imageUrl,
        accent: mockProduct.accent,
      };

      // Item ekle
      let state = basketReducer(initialState, addToBasket(newItem));

      // Miktarı artır
      state = basketReducer(state, increaseQuantity(`${mockProduct.id}-Külah`));

      expect(state.items[0].quantity).toBe(2);
      expect(state.items[0].totalPrice).toBe(mockProduct.price * 2);
      expect(state.totalQuantity).toBe(2);
      expect(state.totalAmount).toBe(mockProduct.price * 2);
    });

    it("olmayan item'ın miktarı artırılmaya çalışıldığında state değişmez", () => {
      const state = basketReducer(
        initialState,
        increaseQuantity("non-existent-id")
      );

      expect(state).toEqual(initialState);
    });

    it("miktar birden fazla kez artırılabilir", () => {
      const newItem = {
        productId: mockProduct.id,
        name: mockProduct.name,
        price: mockProduct.price,
        serving: "Külah",
        imageUrl: mockProduct.imageUrl,
        accent: mockProduct.accent,
      };

      let state = basketReducer(initialState, addToBasket(newItem));

      // 3 kez artır
      state = basketReducer(state, increaseQuantity(`${mockProduct.id}-Külah`));
      state = basketReducer(state, increaseQuantity(`${mockProduct.id}-Külah`));
      state = basketReducer(state, increaseQuantity(`${mockProduct.id}-Külah`));

      expect(state.items[0].quantity).toBe(4);
      expect(state.items[0].totalPrice).toBe(mockProduct.price * 4);
      expect(state.totalQuantity).toBe(4);
      expect(state.totalAmount).toBe(mockProduct.price * 4);
    });
  });

  describe("decreaseQuantity", () => {
    it("miktarı 1'den fazla olan item'ın miktarı azaltılır", () => {
      const newItem = {
        productId: mockProduct.id,
        name: mockProduct.name,
        price: mockProduct.price,
        serving: "Külah",
        imageUrl: mockProduct.imageUrl,
        accent: mockProduct.accent,
      };

      // Item ekle ve miktarı artır
      let state = basketReducer(initialState, addToBasket(newItem));
      state = basketReducer(state, addToBasket(newItem)); // quantity = 2

      // Miktarı azalt
      state = basketReducer(state, decreaseQuantity(`${mockProduct.id}-Külah`));

      expect(state.items[0].quantity).toBe(1);
      expect(state.items[0].totalPrice).toBe(mockProduct.price);
      expect(state.totalQuantity).toBe(1);
      expect(state.totalAmount).toBe(mockProduct.price);
    });

    it("miktarı 1 olan item'ın miktarı azaltıldığında item sepetten kaldırılır", () => {
      const newItem = {
        productId: mockProduct.id,
        name: mockProduct.name,
        price: mockProduct.price,
        serving: "Külah",
        imageUrl: mockProduct.imageUrl,
        accent: mockProduct.accent,
      };

      // Item ekle (quantity = 1)
      let state = basketReducer(initialState, addToBasket(newItem));

      // Miktarı azalt (item kaldırılmalı)
      state = basketReducer(state, decreaseQuantity(`${mockProduct.id}-Külah`));

      expect(state.items).toHaveLength(0);
      expect(state.totalQuantity).toBe(0);
      expect(state.totalAmount).toBe(0);
    });

    it("olmayan item'ın miktarı azaltılmaya çalışıldığında state değişmez", () => {
      const state = basketReducer(
        initialState,
        decreaseQuantity("non-existent-id")
      );

      expect(state).toEqual(initialState);
    });
  });

  describe("clearBasket", () => {
    it("sepet temizlendiğinde tüm item'lar ve toplamlar sıfırlanır", () => {
      const item1 = {
        productId: "1",
        name: "Ürün 1",
        price: 100,
        serving: "Külah",
        imageUrl: "url1",
        accent: "accent1",
      };

      const item2 = {
        productId: "2",
        name: "Ürün 2",
        price: 200,
        serving: "Külah",
        imageUrl: "url2",
        accent: "accent2",
      };

      // Item'ları ekle
      let state = basketReducer(initialState, addToBasket(item1));
      state = basketReducer(state, addToBasket(item2));
      state = basketReducer(state, addToBasket(item2)); // quantity = 2

      // Sepeti temizle
      state = basketReducer(state, clearBasket());

      expect(state.items).toHaveLength(0);
      expect(state.totalQuantity).toBe(0);
      expect(state.totalAmount).toBe(0);
    });

    it("boş sepet temizlendiğinde state değişmez", () => {
      const state = basketReducer(initialState, clearBasket());

      expect(state).toEqual(initialState);
    });
  });

  describe("Karmaşık Senaryolar", () => {
    it("çoklu işlemler doğru şekilde çalışır", () => {
      const item1 = {
        productId: "1",
        name: "Ürün 1",
        price: 100,
        serving: "Külah",
        imageUrl: "url1",
        accent: "accent1",
      };

      const item2 = {
        productId: "2",
        name: "Ürün 2",
        price: 200,
        serving: "Bardakta",
        imageUrl: "url2",
        accent: "accent2",
      };

      let state = initialState;

      // Item1 ekle
      state = basketReducer(state, addToBasket(item1));
      expect(state.items).toHaveLength(1);
      expect(state.totalQuantity).toBe(1);
      expect(state.totalAmount).toBe(100);

      // Item1 tekrar ekle (miktar artar)
      state = basketReducer(state, addToBasket(item1));
      expect(state.items[0].quantity).toBe(2);
      expect(state.totalQuantity).toBe(2);
      expect(state.totalAmount).toBe(200);

      // Item2 ekle
      state = basketReducer(state, addToBasket(item2));
      expect(state.items).toHaveLength(2);
      expect(state.totalQuantity).toBe(3);
      expect(state.totalAmount).toBe(400);

      // Item1'in miktarını artır
      state = basketReducer(state, increaseQuantity("1-Külah"));
      expect(state.items[0].quantity).toBe(3);
      expect(state.totalQuantity).toBe(4);
      expect(state.totalAmount).toBe(500);

      // Item2'nin miktarını azalt
      state = basketReducer(state, decreaseQuantity("2-Bardakta"));
      expect(state.items).toHaveLength(1); // Item2 kaldırıldı
      expect(state.totalQuantity).toBe(3);
      expect(state.totalAmount).toBe(300);

      // Item1'i kaldır
      state = basketReducer(state, removeFromBasket("1-Külah"));
      expect(state.items).toHaveLength(0);
      expect(state.totalQuantity).toBe(0);
      expect(state.totalAmount).toBe(0);
    });
  });
});
