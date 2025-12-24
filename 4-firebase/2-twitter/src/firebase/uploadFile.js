import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from ".";
import { v4 } from "uuid";

const uploadFile = async (file) => {
  // 1) dosya yoksa durdur
  if (!file) return null;

  // 2) dosya formatı resim, video veya ses değilse yüklemeye izin verme
  if (
    !file.type.startsWith("image") &&
    !file.type.startsWith("video") &&
    !file.type.startsWith("audio")
  ) {
    throw new Error("Medya tipi desteklenmiyor");
  }

  // 3) dosya boyutu 20mb üzerinde ise yüklemeye izin verme
  if (file.size > 20000000) {
    throw new Error("Medya boyutu sınırı aşıyor(20mb)");
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
