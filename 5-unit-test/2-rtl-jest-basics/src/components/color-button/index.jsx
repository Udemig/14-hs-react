import { useState } from "react";
import "../button/Button.css";

const ColorButton = () => {
  const [isRed, setIsRed] = useState(true);

  return (
    <button className="btn 123" style={{ background: isRed ? "red" : "aqua" }} onClick={() => setIsRed(!isRed)}>
      {isRed ? "Maviye Çevir" : "Kırmızıya Çevir"}
    </button>
  );
};

export default ColorButton;
