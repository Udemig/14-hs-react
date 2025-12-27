import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 transform -translate-y-1/2 p-4 lg:pl-10 max-md:pt-12 max-w-[68%]">
        <p className="text-grey text-body-sm">Sadece geçerli süreyle</p>

        <h1 className="text-white font-rubik font-semibold mt-0.5 mb-1 text-heading-base">
          30% İndirim
        </h1>

        <p className="text-grey text-body-sm">
          Rahatınız düşünülerek tasarlanan spor ayakkabılar, bir sonraki
          seansınıza tüm odağınızı verebilmenizi sağlar.
        </p>
      </div>

      <img
        src="/banner.png"
        alt="banner"
        className="w-full h-full object-cover min-h-[240px] rounded-2xl sm:rounded-3xl md:rounded-4xl xl:rounded-[48px]"
      />
    </div>
  );
};

export default Hero;
