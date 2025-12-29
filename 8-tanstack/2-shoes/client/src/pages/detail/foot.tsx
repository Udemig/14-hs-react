import { Heart } from "lucide-react";
import type { FC } from "react";
import DOMPurify from "dompurify";

interface Props {
  description: string;
}

const Foot: FC<Props> = ({ description }) => {
  console.log(description);

  return (
    <div>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex gap-2">
          <button className="flex-1 footer-button">Sepete Ekle</button>
          <button className="footer-button">
            <Heart />
          </button>
        </div>

        <button className="footer-button bg-my-blue">Hemen Satın Al</button>
      </div>

      {/*
       * XSS
       * api'dan gelen html verisine içerisinde kötü amaçlı bir script enjekte edilebilecğeinden bu bir saldırı türüdür.
       * dangerouslySetInnerHTML bu html içeriğini doğrudan ekrana bastığı için içinde script barındırması durumunda tehlike yaratabilir.
       * DOMPurify.sanitize(), html içeriğini temizler ve bütün scriptleri kaldırır
       * Bu sayede ortada xss saldırısı için bir tehdit kalmaz
       */}

      <div>
        <h2 className="font-semibold mb-2 mt-8 text-2xl text-dark-grey">Bu ürün hakkında</h2>

        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}></div>
      </div>
    </div>
  );
};

export default Foot;
