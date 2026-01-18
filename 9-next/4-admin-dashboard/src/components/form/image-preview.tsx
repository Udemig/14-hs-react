"use client";

import { FC, useEffect, useState } from "react";
import Field from "./field";
import Image from "next/image";

const ImagePreview: FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

  //TODO GİRLEN URL GEÇERLİ Mİ KONTROL ET
  useEffect(() => {
    // resim url'inin girildiği input'un değerini al
    const imageInput = document.getElementById("image_url") as HTMLInputElement;

    // inputa girdi olunca çalışıcak fonksiyon
    const handleInput = () => {
      const url = imageInput.value;
      setImageUrl(url);
    };

    // inputa olay izleyici ekle
    if (imageInput) {
      imageInput.addEventListener("input", handleInput);
    }
  }, []);

  return (
    <Field label="Resim Önizleme" htmlFor="">
      <div className="relative h-48 w-full bg-gray-100 rounded-md overflow-hidden">
        {imageUrl ? (
          <Image src={imageUrl} alt="Önizleme" fill unoptimized className="object-contain" />
        ) : (
          <span className="grid place-items-center size-full text-gray-400">Resim Yok</span>
        )}
      </div>
    </Field>
  );
};

export default ImagePreview;
