/*
 ! Omit
 * Bir type'da istemediğimiz bi değer olduğunda bütün tipi baştan yazmak yerine istemediğimiz değer / değerleri kaldırmak için kullanılır
*/

type Product = {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
};

// API'dan gelen ürünleri döndüren fonksiyon
const getProducts = (): Product[] => {
  return [{ id: 1, name: "Iphone", price: 78000, isAvailable: true }];
};

// API'a yeni ürün ekleyen fonksiyon (omit kullanmadan)
const createProduct1 = (newProduct: { name: string; price: number; isAvailable: boolean }) => {
  // axios.post()
};

// API'a yeni ürün ekleyen fonksiyon (omit kullanarak)
const createProduct2 = (newProduct: Omit<Product, "id" | "name">) => {
  // axios.post()
};

createProduct2({ price: 24000, isAvailable: true });
