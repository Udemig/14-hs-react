import ProductDetails from "@/components/detail/product-details";
import ProductInfo from "@/components/detail/product-info";
import { getOneProduct } from "@/service/product-service";
import Link from "next/link";
import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
  params: Promise<{ id: string }>;
}

const Page: FC<Props> = async ({ params }) => {
  // url'den id parametresini al
  const { id } = await params;

  // api'dan ürün detaylarını al
  const { grocery } = await getOneProduct(id);

  return (
    <div className="page">
      <div>
        <Link href="/" className="flex items-center gap-2 text-green-600 hover:underline">
          <FaArrowLeft />
          Ana Sayfaya Dön
        </Link>
      </div>

      <div className="mt-10">
        <ProductDetails product={grocery} />
        <ProductInfo product={grocery} />
      </div>
    </div>
  );
};

export default Page;
