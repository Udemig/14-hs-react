// relative import
// import { data } from "../../../utils/constants";

// absolute import
import { data } from "@/utils/constants";

import Image from "next/image";
import Link from "next/link";

const Detail = async ({ params }) => {
  // url'deki id parametresini al
  const { id } = await params;

  // data dizisindeki id'si bilinen elemanı al
  const item = data.find((item) => item.id === id);

  return (
    <div className="mx-auto text-3xl">
      <div className="w-3/4 lg:w-1/2 mx-auto">
        <Link href="/wonders" className="text-xl underline">
          Geri
        </Link>

        <h1 className="text-center text-5xl font-bold mt-10 mb-5">{item.name}</h1>

        <Image src={item.src} alt={item.name} className="w-full aspect-square object-cover rounded-md" />

        <div className="my-10">
          <h3 className="text-lg">Fotoğrafçı</h3>
          <span>{item.photographer}</span>
        </div>

        <div className="my-10">
          <h3 className="text-lg">Lokasyon</h3>
          <span>{item.location}</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
