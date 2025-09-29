import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ACTION_TYPES from "../redux/actions/actionTypes";
import api from "../service/api";
import { updateTodo } from "../redux/actions";

const Modal = ({ isOpen, close, todo }) => {
  const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtan değeri al
    const newText = e.target[0].value.trim();

    // değer boşsa fonksiyonu durdur
    if (!newText) return toast.warning("İçerik boş olamaz");

    // -todo nesnesinin text değerini güncele
    const updatedTodo = {
      ...todo,
      text: newText,
    };

    api
      .put(`/todos/${todo.id}`, updatedTodo)
      .then(() => {
        // aksiyon'u dispatch edip reducer'a haber gönder
        dispatch(updateTodo(updatedTodo));
        // bildirim gönder
        toast.success("Todo güncellendi");
        // modal'ı kapat
        close();
      })
      .catch(() => toast.error("Güncelleme başarısız"));
  };

  return (
    isOpen && (
      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-xs">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Düzenle</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={close}
              >
                X
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form onSubmit={handleSubmit} className="p-4 md:p-5 space-y-4 flex flex-col">
              <label>Text'i Güncelle</label>
              <input
                type="text"
                defaultValue={todo.text}
                className="bg-gray-600 border-gray-500 text-gray-100 p-2.5 rounded-md "
              />

              {/* <!-- Modal footer --> */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Kaydet
                </button>
                <button
                  onClick={close}
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Kapat
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
