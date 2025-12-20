import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="hero bg-cover h-[20vh] md:h-[30vh] grid place-items-center rounded-3xl p-5 relative">
      <div className="text-center text-white relative z-10">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-5 drop-shadow-lg">
          Tripster ile konaklama rezervasyonu yap
        </h1>
        <p className="md:text-lg lg:text-xl drop-shadow-md font-medium">
          Dünya çapında 1,340,076 oda seni bekliyor!
        </p>
      </div>
    </div>
  );
};

export default Hero;
