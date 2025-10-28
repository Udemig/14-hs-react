import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Oturum açıldı");
        navigate("/");
      })
      .catch(() => toast.error("İşlem başarısız oldu"));
  };

  return (
    <div className="wrapper">
      <div className="box flex flex-col justify-center items-center gap-[50px]">
        <h1 className="text-4xl">Chat Odası</h1>

        <p className="text-gray-400">Devam Etmek İçin Giriş Yap</p>

        <button onClick={handleLogin} className="btn flex gap-5 items-center">
          <img src="/google.png" alt="google" className="w-[30px]" />
          <span>Google İle Gir</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
