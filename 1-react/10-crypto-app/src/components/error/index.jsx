const Error = ({ message, refetch }) => {
  return (
    <div className="flex flex-col items-center mt-60 gap-5">
      <h1 className="text-red-500">Üzgünüz bir sorun oluştu</h1>

      <h2 className="font-semibold text-red-400">{message}</h2>

      <button onClick={refetch} className="mt-5 py-2 px-4 border hover:bg-zinc-200/20 transition rounded">
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
