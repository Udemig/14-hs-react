import { useRef } from "react";

const Input = () => {
  // useRef kurulum
  const inputRef = useRef(null);

  // odaklan butonuna tıklanınca çalışır:
  const handleFocus = () => {
    // fonkciston içerisinde input elementine erişmek için js'te olsaydık getElementById() vb. methodları kullanırdık ama react'ta useRef kullan.
    inputRef.current.focus();
    inputRef.current.style.background = "crimson";
  };

  // temizle butonuna tıklanınca çalışır:
  const handleClear = () => {
    inputRef.current.style.background = "white";
    inputRef.current.value = "";
  };

  return (
    <div>
      <h3>Örnek - 1: DOM Elementlerine Erişim</h3>

      <p>
        <b>Açıklama:</b> useRef ile input elementine direkt erişim sağlayıp focus yapabilir ve stilini değiştirebiliriz
      </p>

      <input ref={inputRef} type="text" className="form-control" />

      <button className="btn btn-primary mt-4" onClick={handleFocus}>
        Odaklan
      </button>

      <button className="btn btn-secondary mt-4 ms-4" onClick={handleClear}>
        Temizle
      </button>
    </div>
  );
};

export default Input;
