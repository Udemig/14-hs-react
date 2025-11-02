import { toast } from "react-toastify";
import FormActions from "./form-actions";
import TextArea from "./text-area";
import UserAvatar from "./user-avatar";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useRef, useState } from "react";
import uploadFile from "../../firebase/uploadFile";
import Preview from "./preview";

const PostForm = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputlardaki verileri al
    const text = e.target.text.value.trim();
    const file = e.target.image.files[0];

    // girdi yoksa bildirim gönder
    if (!text && !file) return toast.warning("Lütfen içeriği belirleyiniz");

    // tweet'i koleksiyona kaydet
    try {
      setIsLoading(true);
      // resmi storage'a kaydet
      const fileUrl = await uploadFile(file);

      // kolleksiyonun referansını al
      const collectionRef = collection(db, "tweets");

      // belgeyi kolleksiyona kaydet
      await addDoc(collectionRef, {
        content: { text, image: fileUrl },
        likes: [],
        isEdited: false,
        user: {
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
        },
        createdAt: serverTimestamp(),
      });

      // bildirim gönder
      toast.success("Tweet gönderildi");
      e.target.reset();
      setPreview(null);
    } catch (error) {
      toast.error("Hata! " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // resim değişince çalışır
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  // önizleme resmini iptal et
  const cancelPreview = () => {
    // önizlemeyi kaldır
    setPreview(null);

    // file input'uda seçilen resmi kaldır
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div className="border-b border-tw-gray p-4 flex gap-5">
      <UserAvatar photo={user.photoURL} name={user.displayName} />

      <form onSubmit={handleSubmit} className="w-full pt-1">
        <TextArea />

        <Preview url={preview} cancelPreview={cancelPreview} />

        <FormActions isLoading={isLoading} handleImageChange={handleImageChange} fileInputRef={fileInputRef} />
      </form>
    </div>
  );
};

export default PostForm;
