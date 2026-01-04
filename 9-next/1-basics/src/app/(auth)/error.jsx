"use client";

// Error component'ı 2 prop alır
// 1) hata detaylarını içeren error nesnesi
// 2) component'ı yeniden renderlayıp api isteğini tekrar atan fn
const Error = ({ error, reset }) => {
  return (
    <div className="flex flex-col gap-10 bg-red-500/10  p-10 rounded-lg text-center">
      <h1>Üzgünüz bir hata oluştu</h1>

      <p>{error.message}</p>

      <button onClick={reset}>Tekrar Dene</button>
    </div>
  );
};

export default Error;
