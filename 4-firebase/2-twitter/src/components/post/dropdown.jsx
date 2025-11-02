import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import EditModal from "../modal/edit-modal";
import deleteFromStorage from "../../firebase/deleteFile";

const Dropdown = ({ tweet }) => {
  const [isOpen, setIsOpen] = useState(false);

  // tweet'i gönderen kişi ile şuan oturumu açık olan kişi aynı mı?
  const isOwn = tweet.user.id === auth.currentUser.uid;

  // sil butonuna tıklanınca çalışır
  const handleDelete = async () => {
    // kullanıcıdan onay al
    if (!confirm("Silmek istediğinizden emin misiniz?")) return;

    try {
      // eğer tweet'te resim varsa önce onu sil
      if (tweet.content.image) {
        await deleteFromStorage(tweet.content.image);
      }

      // silinecek dökümanın referansını al
      const docRef = doc(db, "tweets", tweet.id);

      // dökümanı kolleksiyondan kaldır
      await deleteDoc(docRef);

      // dropdown'ı kapat
      toast.info("Tweet kaldırıldı");
    } catch (error) {
      console.log(error);
      toast.error("İşlem başarısız");
    }
  };

  // tweet aktif kullanıcının değilse dropdown'ı gösterme
  if (!isOwn) return;

  return (
    <>
      <label className="popup z-99">
        <input type="checkbox" />
        <div className="burger" tabindex="0">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="popup-window">
          <legend>Eylemler</legend>
          <ul>
            <li>
              <button onClick={() => setIsOpen(true)}>
                <FaEdit />
                <span>Düzenle</span>
              </button>
            </li>
            <hr />
            <li>
              <button onClick={handleDelete}>
                <FaTrash />
                <span>Sil</span>
              </button>
            </li>
          </ul>
        </nav>
      </label>

      <EditModal isOpen={isOpen} close={() => setIsOpen(false)} tweet={tweet} />
    </>
  );
};

export default Dropdown;
