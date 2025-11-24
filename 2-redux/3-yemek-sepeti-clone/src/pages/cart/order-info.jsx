const OrderInfo = ({ basket }) => {
  // toplam ürün adedini hesapla
  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);

  // toplam fiyat değerini hesapla
  const totalPrice = basket.reduce((total, i) => total + i.price * i.amount, 0);

  if (basket.length === 0) return null;

  return (
    <div className="surface-card p-5 h-fit space-y-4 md:sticky md:top-5">
      <h2 className="text-xl font-semibold">Sipariş Detayları</h2>

      <p className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Ürün Adedi</span>
        <span className="text-lg font-bold text-red-500">{totalAmount}</span>
      </p>

      <p className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Toplam Fiyat</span>
        <span className="text-lg font-bold text-red-500">{totalPrice.toFixed(2)}₺</span>
      </p>

      <button className="w-full rounded-full bg-red-500/90 py-3 text-white font-semibold shadow-lg shadow-red-200 transition hover:bg-red-500">
        Siparişi Onayla
      </button>
    </div>
  );
};

export default OrderInfo;
