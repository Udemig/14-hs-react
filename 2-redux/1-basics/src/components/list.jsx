import { useSelector } from "react-redux";
import Card from "./card";

const List = () => {
  // useSelector hook'u
  // store'da tutulan verilere abone olmaya yarayan fonksiyon
  // parametre olarak store'a erişin bir fonksiyon alır
  // bu fonksiyondan dönderilen değeri bir değişkene atıyoruz
  // abone olduğumuz reducer her güncellendiğinde component yeniden render olur
  const { todos, isLoading, error } = useSelector((store) => store.todoReducer);

  if (isLoading) return <h1>Yükleniyor...</h1>;

  if (error) return <h1>HATA!: {error}</h1>;

  return (
    <div className="grid gap-10 mt-10">
      {todos.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
