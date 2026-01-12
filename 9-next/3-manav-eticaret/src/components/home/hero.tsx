import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-5 text-white">
      <div className="flex flex-col justify-between p-6 rounded-lg bg-linear-to-r from-green-600 to-green-700 ">
        <h1 className="text-2xl font-bold">
          Organik Ürünler <br /> Uygun Fiyata
        </h1>

        <p className="my-3">Doğal ve organik ürünlerle sağlıklı beslenme artık çok kolay</p>

        <button className="bg-white inline-block w-fit text-green-700 py-2 px-4 rounded-md hover:bg-green-50 transition cursor-pointer">
          Organik Ürünler
        </button>
      </div>

      <div className="flex flex-col justify-between p-6 rounded-lg bg-linear-to-r from-orange-600 to-orange-700 max-lg:hidden">
        <h1 className="text-2xl font-bold">
          Taze Manav Ürünleri
          <br /> Kapınıza Kadar
        </h1>

        <p className="my-3">En taze meyve ve sebzeler elinizin altında. Sağlıklı yaşamın ilk adımı sizden başlıyor.</p>

        <button className="bg-white inline-block w-fit text-orange-700 py-2 px-4 rounded-md hover:bg-orange-50 transition cursor-pointer">
          Alışverişe Başla
        </button>
      </div>
    </div>
  );
};

export default Hero;
