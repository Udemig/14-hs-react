import { useRef } from "react";

const Scroll = () => {
  // useRef kurulum
  const topRef = useRef(null);

  // başa dön butonuna tıklanınca çalışır:
  const handleScroll = () => {
    // topRef ile tutulan elemet ekrana gelene kadar sayfayı kaydır
    topRef.current.scrollIntoView();
  };

  return (
    <div className="mt-5">
      <h2>Örnek - 2: DOM Elementlerine Erişim</h2>
      <p>
        <b>Açıklama:</b> sayfanın en aşşağısına kaydırmış olan kullanıcyı yukarıya geri göndermek için useRef'le
        yönlendirmek istediğimiz elemanı seçeriz
      </p>

      <h3 ref={topRef} className="my-5">
        ⬆️ Sayfanın Başı
      </h3>

      <div className="d-grid gap-5">
        {new Array(30).fill(1).map((item, key) => (
          <div className="card card-body text-black">Kart</div>
        ))}
      </div>

      <h3 className="mt-5">⬇️ Sayfanın Sonu</h3>

      <div className="d-flex justify-content-center">
        <button className="btn btn-primary my-5" onClick={handleScroll}>
          ⬆️ Başa Dön
        </button>
      </div>
    </div>
  );
};

export default Scroll;
