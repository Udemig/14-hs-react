import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from ".";
import { v4 } from "uuid";

const uploadFile = async (file) => {
  // 1) dosya yoksa durdur
  if (!file) return null;

  // 2) dosya formatı resim değilse yüklemeye izin verme
  if (!file.type.startsWith("image")) {
    throw new Error("Medya tipi desteklenmiyor");
  }

  // 3) dosya boyutu 3mb üzerinde ise yüklemeye izin verme
  if (file.size > 3000000) {
    throw new Error("Medya boyutu sınırı aşıyor(3mb)");
  }

  // 4) resmin yükleneceği konumun referansını al
  const imageRef = ref(storage, `post-images/${v4()}${file.name}`);

  // 5) resmi storage'a yükle
  await uploadBytes(imageRef, file);

  //6) yüklenen fotonun url'ini al
  const url = await getDownloadURL(imageRef);

  return url;
};

export default uploadFile;
