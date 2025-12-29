import Link from "next/link";

const ProductPage = () => {
  return (
    <div className="page">
      <h2 className="mb-10">Ürünler Sayfası</h2>

      <div className="flex flex-col gap-10 text-center">
        <Link href="/products/1">Ürün 1</Link>
        <Link href="/products/2">Ürün 2</Link>
        <Link href="/products/3">Ürün 3</Link>
        <Link href="/products/4">Ürün 4</Link>
        <Link href="/products/5">Ürün 5</Link>
      </div>
    </div>
  );
};

export default ProductPage;
