import type { FC } from "react";

const Title: FC = () => {
  return (
    <div className="mt-6 md:mt-7 lg:mt-8 flex justify-between items-center">
      <h1 className="font-rubik font-semibold text-heading-xs text-dark-grey">
        Yeni Ürünleri <br /> Kaçırma
      </h1>

      <button className="bg-my-blue text-white py-2 px-3 rounded-lg lg:py-3 lg:px-7 transition hover:brightness-90 cursor-pointer">
        Alışverişe Başla
      </button>
    </div>
  );
};

export default Title;
