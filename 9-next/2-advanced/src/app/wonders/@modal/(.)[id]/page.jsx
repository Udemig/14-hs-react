"use client";

import { data } from "@/utils/constants";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

const Page = async () => {
  // url'den id parametresini al
  const { id } = useParams();
  const router = useRouter();

  // data dizisinden modalda gösterilecek veriyi bul2
  const item = data.find((item) => item.id === id);

  // x butonuna tıklandığında
  const handleClose = () => {
    // 1 sayfa geriye yönlendirir
    router.back();

    // 1 sayfa ileri yönlendirir
    router.forward();

    // belirli bir sayfaya yönlendirir
    router.push("/wonder");

    // belirli bir sayfaya yönlendirir ()
    router.replace("/wonder");

    // sayfayı yeniden renderla
    router.refresh();
  };

  //-? butonuna tıklandığında
  const handleInfo = () => {
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs grid place-items-center p-4">
      <div className="bg-white px-10 pb-10 text-black rounded-md">
        <div className="flex justify-between my-5 text-lg">
          <button onClick={handleClose}>X</button>
          <button onClick={handleInfo}>?</button>
        </div>

        <Image
          src={item.src}
          alt={item.name}
          className="max-h-75 my-5 text-3xl object-cover rounded-md aspect-square"
        />

        <div className="my-5">
          <h3 className="text-lg font-semibold">Fotoğrafçı</h3>
          <span className="text-lg">{item.photographer}</span>
        </div>

        <div className="my-5">
          <h3 className="text-lg font-semibold">Lokasyon</h3>
          <span className="text-lg">{item.location}</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
