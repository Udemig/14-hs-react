const Error = ({ message }) => {
  return (
    <div className="col-span-3 my-20 grid place-items-center gap-10 animate-fade-in text-center">
      <div className="space-y-3">
        <p className="text-6xl">😞</p>
        <p className="text-gray-700 text-lg font-medium">Üzgünüz bir sorun oluştu</p>
        <p className="text-red-500 font-semibold bg-red-50 px-3 py-6 rounded-xl">{message}</p>
      </div>
    </div>
  );
};

export default Error;
