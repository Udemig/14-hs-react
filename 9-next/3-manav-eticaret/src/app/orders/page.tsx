import { getOrders } from "@/service/basket-service";
import Image from "next/image";
import { FaPhone, FaStore, FaTruck } from "react-icons/fa";

const Orders = async () => {
  const { orders } = await getOrders();

  if (!orders || orders.length === 0) return <div>Sipariş Bulunamadı</div>;

  return (
    <div className="page">
      <h1 className="text-2xl font-bold mb-6">Siparişlerim</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order._id} className="bg-white border border-gray-200 overflow-hidden shadow-sm rounded-lg">
            <div className="p-6">
              {/* Ürün Listesi */}
              <div className="space-y-4 mb-4">
                {order.items.map((item, key) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-16 relative rounded-lg overflow-hidden border border-gray-200">
                        <Image
                          src={item.product.photo}
                          alt={item.product.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-800">{item.product.name}</h3>
                        <p className="text-sm text-gray-600">
                          {item.quantity} {item.product.unit} x {item.price} TL
                        </p>
                      </div>
                    </div>

                    <p className="font-medium text-gray-800">{item.quantity * item.price} TL</p>
                  </div>
                ))}
              </div>

              {/* Toplam */}
              <div className="flex justify-end items-center gap-2 py-3 border-t border-gray-200">
                <span className="text-gray-600">Toplam:</span>

                <h5 className="text-2xl font-bold text-green-600">{order.total_amount} TL</h5>
              </div>

              {/* Müşteri ve Teslimat Bilgileri */}
              <div className="grid md:grid-cols-2 gap-4 py-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-green-600" />
                  <div>
                    <h5 className="text-sm text-gray-500">Müşteri</h5>
                    <p>{order.customer_name}</p>
                    <p className="text-sm text-gray-700">{order.customer_phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {order.is_delivery ? <FaTruck className="text-green-600" /> : <FaStore className="text-green-600" />}

                  <div>
                    <h5>{order.is_delivery ? "Teslimat Adresi" : "Mağazadan Alım"}</h5>

                    {order.is_delivery && <p className="text-sm text-gray-700">{order.delivery_address}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
