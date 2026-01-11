import Link from "next/link";
import { IoIosCheckmark } from "react-icons/io";

const Page = () => {
  return (
    <div className="h-[80vh]">
      <div className="h-1/2 bg-green-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10">
          <IoIosCheckmark className="text-[100px]" />
          <p className="font-semibold text-4xl text-center">Ödeme Başarılı Oldu</p>
        </div>
      </div>

      <div className="h-1/2 p-10 mt-5 text-center text-black">
        <p className="text-lg">Siparişiniz Yakında teslim edilecektir</p>

        <p className="mt-4 mb-10 text-zinc-700">Detaylar için mailinizi kontrol ediniz.</p>

        <Link href="/orders" className="border shadow py-2 px-5 rounded-lg hover:shadow-lg hover:bg-gray-100">
          Siparişlerim
        </Link>

        <Link
          href="/"
          className="border shadow py-2 px-5 rounded-lg hover:shadow-lg hover:bg-gray-100 mt-10 block w-fit mx-auto"
        >
          Anasayfa
        </Link>
      </div>
    </div>
  );
};

export default Page;
