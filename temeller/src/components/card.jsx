// Component'ı kullanırken gönderdiğimiz proplara fonksiyonun parametre bölümünden erişiriz
function Card(props) {
  const campaign = true;

  return (
    <div className="card">
      <h1>{props.name}</h1>

      {/* Koşulun gerçekleşmediği durumunda ekrana stokta yok yazar */}
      {props.stock > 0 ? <p>Stok: {props.stock}</p> : <p>Stok Yok</p>}

      {/* Koşulun gerçekleşmediği seneryoada ekrana hiç bir şey gelmez */}
      {campaign === true && <p>Bu ürün kampanyalı</p>}
    </div>
  );
}

export default Card;
