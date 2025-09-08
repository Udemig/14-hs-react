import axios from "axios";
import { createContext, useEffect, useState } from "react";

// context yapısının kurulumu
export const ProductContext = createContext();

// context sağlayıcı component'ı oluşturur (hoc)
export const ProductProvider = ({ children }) => {
  // context yapısında tutulacak state'ler
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  // api'dan verileri al
  useEffect(() => {
    setLoading(true);

    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // provider'ın value prop'uyla bütün component'lar tarafından erişilecek değerleri belirliyoruz
  return <ProductContext.Provider value={{ loading, error, products }}>{children}</ProductContext.Provider>;
};
