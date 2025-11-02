import { deleteObject, ref } from "firebase/storage";
import { storage } from ".";

// Firebase storage url'inden dosya referansını alır ve siler
const deleteFromStorage = async (imageUrl) => {
  // 1) URL yoksa durdur
  if (!imageUrl) return null;

  try {
    // Firebase Dosya Url Formatı:
    // https://firebasestorage.googleapis.com/v0/b/hs-twitter-aef02.firebasestorage.app/o/[DOSYA_YOLU]?alt=media&token=000070b4-c2b3-4b04-aed6-0ff2bdb0926c

    // 2) URL'deki karakter kodalarını normale çevir
    const normalUrl = decodeURIComponent(imageUrl);

    // 3) Url'den dosya yolunu çıkar
    const startIndex = normalUrl.indexOf("/o/") + 3;
    const endIndex = normalUrl.indexOf("?");
    const imagePath = normalUrl.substring(startIndex, endIndex);

    // 4) Silinecek dosyanın referansını al
    const fileRef = ref(storage, imagePath);

    // 5) dosyayı sil
    await deleteObject(fileRef);

    return true;
  } catch (error) {
    return false;
  }
};

export default deleteFromStorage;
