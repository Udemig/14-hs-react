"use client";

import { FC, useEffect, useState } from "react";
import Field from "./field";
import Image from "next/image";

const ImagePreview: FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // resim url'inin girildiği input'un değerini al
    const imageInput = document.getElementById("image_url") as HTMLInputElement;

    // inputa girdi olunca çalışıcak fonksiyon
    const handleInput = () => {
      const url = imageInput.value;
      setImageUrl(url);
      setIsLoading(true);

      if (url) {
        // url'in geçerli bir resim url'i olduğunu kontrol et
        const testImg = new globalThis.Image();

        // resmin yüklenme durumunu izle
        testImg.onload = () => {
          setIsValid(true);
          setIsLoading(false);
        };

        // resim yüklenmeme durumu izle
        testImg.onerror = () => {
          setIsValid(false);
          setIsLoading(false);
        };

        // test resminin kaynağını ayarla
        testImg.src = url;
      } else {
        setIsValid(false);
        setIsLoading(false);
      }
    };

    // düzenleme sayfası ilk yüklendiğinde inputtaki yazıyı görmesi için
    handleInput();

    // inputa olay izleyici ekle
    if (imageInput) {
      imageInput.addEventListener("input", handleInput);
    }

    // sayfadan ayrılınca olay izleyicisini durdur
    return () => {
      if (imageInput) {
        imageInput.removeEventListener("input", handleInput);
      }
    };
  }, []);

  return (
    <Field label="Resim Önizleme" htmlFor="">
      <div className="relative h-48 w-full bg-gray-100 rounded-md overflow-hidden">
        {isLoading ? (
          <div className="grid place-items-center size-full text-gray-400">Resim Yükleniyor...</div>
        ) : isValid && imageUrl ? (
          <Image src={imageUrl} alt="Önizleme" fill unoptimized className="object-contain" />
        ) : (
          <span className="grid place-items-center size-full text-gray-400">
            {!imageUrl ? "Resim Yok" : "Geçersiz URL"}
          </span>
        )}
      </div>
    </Field>
  );
};

export default ImagePreview;
