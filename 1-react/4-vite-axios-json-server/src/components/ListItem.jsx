import { useState } from "react";
import api from "../api/axios";

// Object-Destructring: Nesneyi Dağıtma
// Nesne içerisindeki değerlere doğrudan erişmemizi sağlar
const ListItem = ({ todo, deleteTodo, updateTodo }) => {
  // düzenleme modunda mıyız state,
  const [isEditing, setIsEditing] = useState(false);

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

  // düzenleme formu gönderilince çalışıcak fonksiyon
  const handleSubmt = (e) => {
    e.preventDefault();

    // başlık yazılmış mı kontrol et
    if (!e.target[0].value.trim()) return alert("lütfen başlığı belirleyin");

    // güncellenen değerileri input ve select alanından al
    const updateData = {
      title: e.target[0].value,
      category: e.target[1].value
    };

    // api'a güncelleme isteği at
    api
      .patch(`/todos/${todo.id}`, updateData)
      // api isteği başarılı olursa:
      .then((res) => {
        // state'i güncelle
        updateTodo(todo.id, res.data);

        // düzenleme modunu kapat
        setIsEditing(false);

        // bildirim gönder
        alert("todo güncellendi");
      });
  };

  // 1.çözüm
  // arkaplan rengini belirleme fonksiyonu
  const getColor = (category) => {
    switch (category) {
      case "eğlence":
        return "green";
      case "alışveriş":
        return "crimson";
      case "sosyal":
        return "blue";
      case "öğrenme":
        return "orange";
      case "günlük":
        return "brown";
      case "spor":
        return "black";
      case "iş":
        return "purple";
      default:
        return "gray";
    }
  };

  // 2.çözüm
  // category'nin değerlerine bağlı renkleri içeren nesne
  const categoryColor = {
    eğlence: "green",
    alışveriş: "crimson",
    sosyal: "blue",
    öğrenme: "orange",
    günlük: "brown",
    spor: "black",
    iş: "gray",
  };

  // eğer düzenleme modundaysak ekrana bunu bas
  if (isEditing)
    return (
      <div className="list-item">
        <form onSubmit={handleSubmt} className="edit-form">
          <div className="edit-inputs">
            <input type="text" defaultValue={todo.title} />

            <select defaultValue={todo.category}>
              <option value="varsayılan">Varsayılan</option>
              <option value="günlük">Günlük</option>
              <option value="önemli">Önemli</option>
              <option value="iş">İş</option>
            </select>
          </div>

          <div className="item-actions">
            <button>Kaydet</button>
            <button onClick={() => setIsEditing(false)}>İptal</button>
          </div>
        </form>
      </div>
    );

  // normal moddaysak ekrana bunu bas
  return (
    <div className="list-item">
      <div className="item-content">
        <h3>{todo.title}</h3>

        <div className="item-details">
          <span style={{ background: categoryColor[todo.category] }} className="item-category">
            {todo.category}
          </span>
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
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          Düzenle
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Sil
        </button>
      </div>
    </div>
  );
};

export default ListItem;
