import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // useSearchParams kurulum:
  // fonksiyonu çağırınca dizi içerisinde 2 eleman döner
  // 1) url'deki arama parametrelere erişmeye ve güncellemeye yarayan nesne
  // 2) searchParams'ı url'e aktarır (url'i güncelleyen fonksiyon)
  const [searchParams, setSearchParams] = useSearchParams();

  // select alanından değer seçince çalışan:
  const handleChange = (e) => {
    // select alanından seçilen değere eriş
    const value = e.target.value;

    // eğerki bir değer seçildiyse parametrelerin arasına ekle
    if (value) {
      searchParams.set("siralama", value);
    } else {
      searchParams.delete("siralama");
    }

    // searchParams nesnesinde yapılan değişkliği urle aktar
    setSearchParams(searchParams);
  };

  // form göndeirlince çalışan:
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputa yazılan yazıya eriş
    const text = e.target[0].value;

    // searchParams nesnesine text'i ekle
    searchParams.set("arama_terimi", text);

    // searchParams nesnesini url'e aktar
    setSearchParams(searchParams);
  };

  return (
    <div className="card border-0 shadow-md">
      <div className="row g-3 align-items-center card-body shadow-sm">
        {/* sırala */}
        <div className="col-md-3">
          <select defaultValue={searchParams.get("siralama")} className="form-select" onChange={handleChange}>
            <option value="">Sırala</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </div>

        {/* filteleme */}
        <form className="col-md-7" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="kitap adı ara..."
              defaultValue={searchParams.get("arama_terimi")}
            />
            <button>Ara</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
