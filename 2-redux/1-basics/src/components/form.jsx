import { toast } from "react-toastify";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import api from "../service/api";
import { createTodo } from "../redux/actions";

const Form = () => {
  // bir component içerisinde dispatch yapılacaksa bu kurulum gerekli
  const dispatch = useDispatch();

  // form gönderilince:
  const handleSubmit = (e) => {
    // sayfa yenilenmesini engelle
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.trim();

    // input boş ise bildirim gönder
    if (!text) return toast.warning("İçerik boş bırakılamaz");

    // kaydedilecek todo nesnesini oluştur
    const newTodo = {
      id: v4(),
      text,
      isDone: false,
      createdAt: new Date().getTime(),
    };

    // api'a todo'yu kaydet
    api
      .post("/todos", newTodo)
      .then(() => {
        // bildirim gönder
        toast.success("Todo oluşturuldu");

        // reducer'ı güncellemek için aksiyon dispatch et
        dispatch(createTodo(newTodo));
      })
      .catch((err) => {
        toast.error("Todo oluşturma başarısız");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 my-6">
      <input
        type="text"
        className="bg-zinc-500 border border-zinc-400 text-white rounded-md p-2 flex-1 outline-none"
        placeholder="Bir şeyler yazın..."
      />

      <button type="submit" className="bg-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-500 cursor-pointer">
        Ekle
      </button>
    </form>
  );
};

export default Form;
