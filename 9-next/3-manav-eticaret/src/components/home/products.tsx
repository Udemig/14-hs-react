import { getAllProducts } from "@/service/product-service";
import { Product } from "@/types";
import { FC } from "react";
import Card from "./card";
import { categoryNames } from "@/utils/constants";

const Products: FC = async () => {
  const { groceries } = await getAllProducts();

  // API'dan karışık olarak gelen ürün verilerini kategorisine göre alt dizilere ayır
  const groupedProducts = groceries.reduce<Record<string, Product[]>>((obj, grocery) => {
    // ürünün kategorisini al
    const category = grocery.category;

    // nesne içerisinde kategori ismine karşılık bir field yoksa o kategori isminde boş bir dizi oluştur
    if (!obj[category]) {
      obj[category] = [];
    }

    // nesnen içerisideki ürünün kategorisine ait diziye ürünü ekle
    obj[category].push(grocery);

    // nesneyi döndür
    return obj;
  }, {});

  return (
    <div className="space-y-10">
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category}>
          <h2 className="text-2xl font-bold mb-5">{categoryNames[category as keyof typeof categoryNames]}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((product) => (
              <Card product={product} key={product._id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
