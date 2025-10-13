import { ArrowRight } from "lucide-react";

const TextContainer = () => {
  return (
    <div className="flex gap-4 mt-6 lg:gap-8 flex-col lg:flex-row">
      {/* Çevrilecek Metin */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm text-zinc-300">Çevrilecek Metin</label>

          <button className="text-xs text-zinc-400 hover:text-zinc-200">Temizle</button>
        </div>

        <div className="relative">
          <textarea className="textarea" placeholder="Çevirmek istediğiniz metni buraya yazınız"></textarea>
          <div className="absolute bottom-2 right-2 text-xs text-zinc-500 bg-zinc-100">100 karakter</div>
        </div>
      </div>

      {/* İkon */}
      <div className="flex items-center justify-center lg:flex-col">
        <div className="size-8 lg:size-12 bg-blue-600 rounded-full grid place-items-center">
          <ArrowRight className="size-4 lg:size-6 max-lg:rotate-90" />
        </div>
      </div>

      {/* Çevrilmiş Metin */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm text-zinc-300">Çevrilmiş Metin</label>

          <button className="text-xs text-zinc-400 hover:text-zinc-200">Kopyala</button>
        </div>

        <textarea className="textarea" disabled></textarea>
      </div>
    </div>
  );
};

export default TextContainer;
