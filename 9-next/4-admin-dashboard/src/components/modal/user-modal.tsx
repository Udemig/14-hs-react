import { getUser } from "@/utils/service";
import Link from "next/link";
import { FC } from "react";
import { CgClose } from "react-icons/cg";

interface Props {
  userId: string;
}

const UserModal: FC<Props> = async ({ userId }) => {
  // api'dan kullanıcı detaylarını al
  const user = await getUser(userId);

  // ekrana basılacak olan değerlerib bir dizi içerisinde tanımla
  const fields = [
    {
      label: "Eposta",
      value: user.email,
    },
    {
      label: "Telefon",
      value: user.phone,
    },
    {
      label: "Ülke",
      value: user.address.country,
    },
    {
      label: "Şehir",
      value: user.address.city,
    },
    {
      label: "Adres",
      value: user.address.street,
    },
    {
      label: "Posta Kodu",
      value: user.address.postal_code,
    },
    {
      label: "Sipariş Sayısı",
      value: user.orders.length,
    },
  ];

  return (
    <div className="absolute bg-black/10 backdrop-blur-[2px] inset-0 grid place-items-center p-10">
      <div className="bg-white rounded-lg shadow py-6 px-10 pb-14 w-full max-w-md">
        {/* Modalı Kapat */}
        <div className="flex justify-end items-center">
          <Link href="/users" className="button hover:bg-zinc-200">
            <CgClose className="text-xl" />
          </Link>
        </div>

        {/* Kullanıcı Bilgileri */}
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold text-center my-5">{user.name}</h1>

          {/* Kullanıcı Bilgileri */}
          <div className="flex flex-col gap-3">
            {fields.map((field, key) => (
              <div key={key} className="flex justify-between">
                <span>{field.label}</span>
                <span className="font-semibold">{field.value}</span>
              </div>
            ))}
          </div>

          <hr />

          {/* Sipariş Detayları */}
          <div>
            <div className="grid grid-cols-3 text-center">
              <span>Ürün ID</span>
              <span>Adet</span>
              <span>Toplam Fiyat</span>
            </div>

            <div className="flex flex-col gap-2 mt-2 text-center">
              {user.orders.map((order, key) => (
                <div key={key} className="bg-gray-100 p-2 rounded-lg grid grid-cols-3 font-semibold">
                  <span>{order.product_id}</span>
                  <span>{order.quantity}</span>
                  <span>{order.total_price} TL</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
