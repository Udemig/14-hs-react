import type { FC } from "react";

const FormPage: FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-8 md:p-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-600 to-blue-500 bg-clip mb-3">
            Yeni Konaklama Noktası Oluştur
          </h1>

          <p className="text-zinc-600">
            Aşağıdaki formu doldurarak yeni bir konaklama noktası
            ekleyebilirsiniz
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
