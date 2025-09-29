import { useEffect, useState } from "react";
import Form from "./components/Form";
import api from "./api/axios";
import ListItem from "./components/ListItem";

const App = () => {
  // ekrana basılacak todo'ları tuttuğumuz state
  const [todos, setTodos] = useState([]);

  // component ekrana gelme anında:
  useEffect(() => {
    // api'a gönderilecek parametreleri ayarla
    const params = { _sort: "date", _order: "desc" };

    // api'dan todo verilerini al (axios) ve state'e aktar
    api.get("/todos", { params }).then((res) => setTodos(res.data));
  }, []);

  // state'e yeni todoyu ekleyicek fonksiyon
  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  // state'den todoyu kaldıran fonksiyon
  const deleteTodo = (deleteId) => {
    // parametre olarak gelen id'li todo'yu diziden kaldır
    const filtredTodos = todos.filter((todo) => todo.id !== deleteId);
    // state'i güncelle
    setTodos(filtredTodos);
  };

  // state'de tutulan todo'yu güncelleyicek fonksiyon
  const updateTodo = (id, updateData) => {
    const updatedTodos = 
       todos.map((todo) => (todo.id === id ? updateData : todo));

    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <header>
        <h1>TODO APP</h1>
        <p>Pratik için basit CRUD uygulaması</p>
      </header>

      <Form addTodo={addTodo} />

      <div className="list">
        {todos.map((todo) => (
          <ListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        ))}
      </div>
    </div>
  );
};

export default App;
