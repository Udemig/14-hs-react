const Hero = () => {
  return (
    <div className="bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container py-10 pb-16 md:pt-[100px] md:pb-[120px] grid md:grid-cols-2 gap-10 relative z-10">
        <div className="flex flex-col gap-6 md:gap-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white via-pink-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            COVID-19 CANLI TAKİP
          </h1>

          <p className="text-gray-200 text-lg leading-relaxed">
            Koronavirüs hastalığı 2019 şiddetli akut solunum sendromu koronavirüsü 2'nin neden olduğu bulaşıcı bir
            hastalıktır. İlk vaka ile Çin'in Hubei eyaletinin Wuhan şehrinde Kasım 2019 tarihinde karşılaşılmıştır.
          </p>

          <div className="flex gap-5">
            <button className="hero-btn">Nasıl Korunulur?</button>
            <button className="hero-btn border-2 border-white/30">Doktor Bul</button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img src="/hero.png" alt="hero" className="w-[300px] md:h-[250px] dropw-shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
