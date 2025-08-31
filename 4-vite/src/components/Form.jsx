import api from "../api/axios";

const Form = ({ addTodo }) => {
  // form gönderilince çalışır:
  const handleSubmit = (e) => {
    // sayfa yenilemeyi engeller
    e.preventDefault();

    // title değerinin tanımlı değilse fonksiyonu durdur
    if (!e.target[0].value.trim()) return alert("İçerik boş olamaz");

    // yeni todo nesnesini oluştur
    const newTodo = {
      title: e.target[0].value,
      category: e.target[1].value,
      date: new Date().getTime(),
    };

    // yeni todo verisini api'a kaydet
    api
      .post("/todos", newTodo)
      // api isteği başarılı olursa
      .then((res) => {
        // state'i güncelle
        addTodo(res.data);

        // bildirim gönder
        alert("Yeni todo oluşturuldu");

        // formu sıfırla
        e.target.reset();
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Yeni Öğe Ekle</h2>

      <div className="form-group">
        <label htmlFor="title">Başlık:</label>
        <input type="text" id="title" />
      </div>

      <div className="form-group">
        <label htmlFor="category">Kategori:</label>
        <select id="category">
          <option value="varsayılan">Varsayılan</option>
          <option value="günlük">Günlük</option>
          <option value="önemli">Önemli</option>
          <option value="iş">İş</option>
        </select>
      </div>

      <button>Ekle</button>
    </form>
  );
};

export default Form;
