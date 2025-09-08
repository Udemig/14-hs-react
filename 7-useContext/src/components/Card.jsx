const Card = ({ product }) => {
  return (
    <div className="card py-2">
      <div className="d-flex justify-content-center">
        <img src={product.thumbnail} />
      </div>

      <div className="card-body d-flex flex-column gap-1 justify-content-between">
        <div className="d-flex flex-column gap-1">
          <h4>{product.title}</h4>

          <p className="d-flex gap-2">
            <span>Kategori:</span>
            <b>{product.category}</b>
          </p>

          <p className="d-flex gap-2">
            <span>Fiyat:</span>
            <b>${product.price}</b>
          </p>

          <p className="d-flex gap-2">
            <span>Rayting:</span>
            <b>{"⭐️ ".repeat(Math.round(product.rating))} </b>
          </p>
        </div>

        <button>Sepete Ekle</button>
      </div>
    </div>
  );
};

export default Card;
