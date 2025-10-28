import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate, useOutletContext } from "react-router-dom";

const Room = () => {
  // outlet'e context prop'uyla gönderilen içeriğe eriş
  const user = useOutletContext();
  const navigate = useNavigate();

  // çıkış yap fonksiyonu
  const handleLogout = () => {
    signOut(auth).then(() => toast.info("Oturum kapandı"));
  };

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki girdiyi al
    const room = e.target[0].value.trim().toLowerCase().replaceAll(" ", "-");

    // oda ismi girilmediysa
    if (!room) return toast.info("Oda ismi giriniz");

    // kullanıcıyı sohbet sayfasına yönlendir
    navigate(`/chat/${room}`);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="box flex flex-col gap-10 text-center">
        <h1 className="text-4xl">Chat Odası</h1>

        <p>
          Selam {user.displayName}, <br />
          Hangi Odaya Gireceksin?
        </p>

        <input
          type="text"
          placeholder="örn: haftasonu"
          className="border border-gray-300 rounded-md shadow-lg py-2 px-4"
        />

        <button type="submit" className="btn bg-zinc-700 text-white">
          Odaya Gir
        </button>

        <button onClick={handleLogout} type="button" className="btn bg-red-500 text-white">
          Çıkış Yap
        </button>
      </form>
    </div>
  );
};

export default Room;
