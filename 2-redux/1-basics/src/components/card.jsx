import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./modal";
import api from "../service/api";
import { toast } from "react-toastify";
import { deleteTodo, toggleTodo } from "../redux/actions";

const Card = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // sil butonuna tıklanınca
  const handleDelete = () => {
    api
      .delete(`/todos/${todo.id}`)
      .then(() => {
        dispatch(deleteTodo(todo.id));
        toast.success("Todo silindi");
      })
      .catch(() => toast.error("Silme işlemi başarısız"));
  };

  // durum butonuna tıklanınca
  const handleStatus = () => {
    api
      .patch(`/todos/${todo.id}`, { isDone: !todo.isDone })
      .then(() => dispatch(toggleTodo(todo.id)))
      .catch(() => toast.error("Güncelleme başarısız"));
  };

  return (
    <>
      <div className="border border-zinc-700 rounded p-4 shadow-lg">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">{todo.text}</h3>
          <h5>{todo.isDone ? "Tamamlandı" : "Devam Ediyor"}</h5>
          <h6 className="text-zinc-300">
            {new Date(todo.createdAt).toLocaleDateString("tr", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h6>
        </div>

        <div className="flex gap-4 mt-4">
          <button onClick={() => setIsOpen(true)} className="btn bg-blue-500">
            Düzenle
          </button>
          <button onClick={handleStatus} className="btn bg-yellow-500">
            {todo.isDone ? "Geri Al" : "Tamamla"}
          </button>
          <button onClick={handleDelete} className="btn bg-red-500">
            Sil
          </button>
        </div>
      </div>

      <Modal isOpen={isOpen} close={() => setIsOpen(false)} todo={todo} />
    </>
  );
};

export default Card;
