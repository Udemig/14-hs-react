import api from "../api/axios";

// Object-Destructring: Nesneyi Dağıtma
// Nesne içerisindeki değerlere doğrudan erişmemizi sağlar
const ListItem = ({ todo, deleteTodo }) => {
  // sil butonuna tıklanınca çalışıcak fonksiyon
  const handleDelete = () => {
    // silmek için api isteği at
    api
      .delete(`/todos/${todo.id}`)
      // api isteği başarılı olursa
      .then(() => {
        // state'den todo'yu kaldır
        deleteTodo(todo.id);

        // bildirim gönder
        alert("Todo silindi");
      });
  };

  return (
    <div className="list-item">
      <div className="item-content">
        <h3>{todo.title}</h3>

        <div className="item-details">
          <span className="item-category">{todo.category}</span>
          <span className="item-date">
            {new Date(todo.date).toLocaleDateString("tr", {
              day: "2-digit",
              month: "long",
              year: "2-digit",
            })}
          </span>
        </div>
      </div>

      <div className="item-actions">
        <button className="edit-btn">Düzenle</button>
        <button className="delete-btn" onClick={handleDelete}>
          Sil
        </button>
      </div>
    </div>
  );
};

export default ListItem;
