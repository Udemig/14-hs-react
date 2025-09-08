import { createContext, useState } from "react";

// context yapısını oluştur
export const BasketContext = createContext();

// hoc formatında bir sağlayıcı oluştur
export const BasketProvider = ({ children }) => {
  // sepet state'i
  const [basket, setBasket] = useState([]);

  // sepete ürün ekleme fonksiyonu
  const addToBasket = (product) => {
    // ürün sepet dizisinde ara
    const found = basket.find((item) => item.id === product.id);

    if (found) {
      // ürün sepet dizisinde zaten varsa: miktarını arttır
      // a) ürün nesnesinin miktaırnı 1 arttır
      const updated = { ...found, amount: found.amount + 1 };

      // b) yeni ürün nesnesini dizide güncelle
      const newBasket = basket.map((item) => (item.id === updated.id ? updated : item));

      // c) state'i güncelle
      setBasket(newBasket);
    } else {
      // yoksa: ürünü sepet dizisine ekle (miktar:1)
      setBasket([...basket, { ...product, amount: 1 }]);
    }
  };

  // sepetten ürün kaldırma fonksiyonu
  const removeFromBasket = (product) => {
    if (product.amount > 1) {
      // a) ürün nesnesini güncelle
      const updated = { ...product, amount: product.amount - 1 };

      // b) basket dizisinide güncelle
      const newBasket = basket.map((item) => (item.id === updated.id ? updated : item));

      // c) sepet state'ini güncelle
      setBasket(newBasket);
    } else {
      // a) diziden ürünü kaldır
      const filtred = basket.filter((item) => item.id !== product.id);

      // b) sepete state'ini güncelle
      setBasket(filtred);
    }
  };

  // sepeti tamamen temizleme fonksiyonu
  const clearCart = () => {
    setBasket([]);
    alert("sipariş verildi");
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, clearCart }}>
      {children}
    </BasketContext.Provider>
  );
};
