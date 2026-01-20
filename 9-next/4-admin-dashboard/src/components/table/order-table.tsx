import { FC } from "react";
import TableWrapper from "./table-wrapper";
import { getOrders } from "@/utils/service";

const OrderTable: FC = async () => {
  // api'dan sipariş verilerini al
  const orders = await getOrders();

  // duruma bağlı renk döndüren fonksiyon
  const getColor = (status: string): string => {
    switch (status) {
      case "Teslim Edildi":
        return "bg-blue-500";
      case "Kargoya Verildi":
        return "bg-green-500";
      case "Hazırlanıyor":
        return "bg-yellow-500";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <TableWrapper>
      <thead>
        <tr className="border-b border-zinc-300 shadow">
          <th>#</th>
          <th>Sipariş Tarihi</th>
          <th>Ürün Sayısı</th>
          <th>Toplam Fiyat</th>
          <th>Adres</th>
          <th>Durum</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>

            <td>
              {new Date(order.order_date).toLocaleDateString("tr", {
                day: "2-digit",
                month: "long",
                year: "2-digit",
              })}
            </td>

            <td>{order.items.reduce((acc, item) => acc + item.quantity, 0)}</td>

            <td>{order.total_price.toFixed(2)} TL</td>

            <td>{order.shipping_address.city}</td>

            <td>
              <p
                className={`${getColor(order.status)} text-white text-shadow-2xs py-1 px-2 rounded-lg shadow text-center w-full text-nowrap max-w-40 mx-auto`}
              >
                {order.status}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default OrderTable;
