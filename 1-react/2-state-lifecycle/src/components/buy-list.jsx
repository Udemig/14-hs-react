import { useState } from "react";

const BuyList = () => {
  const [product, setProduct] = useState("");
  const [list, setList] = useState([]);

  const handleCreate = () => {
    // yeni ürünü liste state'ine ekle
    setList([...list, product]);

    // input'u temizle
    setProduct("");
  };

  return (
    <div>
      <h1>Satın Alınacakalar</h1>

      <div>
        <input
          type="text"
          placeholder="ürün adı"
          value={product} // state ile inputu bağladık
          onChange={(e) => setProduct(e.target.value)}
        />

        <button disabled={!product.trim()} onClick={handleCreate}>
          Ekle
        </button>
      </div>

      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BuyList;
