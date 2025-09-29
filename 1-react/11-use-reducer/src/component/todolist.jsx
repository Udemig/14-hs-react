import { useReducer } from "react";
import todoReducer, { initialState } from "../reducer/todoReducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.trim();

    // yazı yoksa hata gönder
    if (!text) return alert("Lütfen içerik giriniz..");

    // state'e yeni todoyu ekliyecek aksiyonu dispatch et
    dispatch({ type: "CREATE", payload: text });
  };

  return (
    <div>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>Değiş</button>

      <h1>Tema: {state.theme}</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="todo yazınız.." />
        <button>Gönder</button>
      </form>

      <ul>
        {state.todos.map((item) => (
          <li>
            <span>{item.text}</span>
            <button onClick={() => dispatch({ type: "DELETE", payload: item.id })}>sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
