import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex-1 grid place-items-center text-2xl">
      <div className="p-5 border border-zinc-400 text-center space-y-5 rounded-lg">
        <h1 className="text-5xl text-yellow-500">404</h1>
        <h4>Aradığınız sayfa içeriği bulunamadı</h4>
        <Link href="/" className="text-lg text-blue-500">
          Anasayfa'ya Dön
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
