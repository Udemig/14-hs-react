import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div>
        <h3>Unit Test Nedir ?</h3>

        <button onClick={() => setIsOpen(!isOpen)} className="btn">
          {isOpen ? "Gizle" : "Göster"}
        </button>
      </div>

      <p className={isOpen ? "show" : "hide"} role="paragraph">
        Birim testi (İngilizce unit test), yazılım programlamasında bir tasarım ve geliştirme yöntemidir. Bu yöntemde
        yazılımcı yazılım kodunu oluşturan birimlerin kullanıma hazır olduğuna iknâ olur.
      </p>
    </div>
  );
};

export default Accordion;
