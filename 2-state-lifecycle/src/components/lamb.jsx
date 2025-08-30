import open from "../assets/open.png";
import closed from "../assets/closed.png";
import { useState } from "react";

const Lamb = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <h2>Lamba</h2>

      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Kapat" : "Aç"}</button>

      <p>
        Lamba şu anda: <b>{isOpen ? "açık" : "kapalı"}</b>
      </p>

      <img src={isOpen ? open : closed} height={400} />
    </div>
  );
};

export default Lamb;
