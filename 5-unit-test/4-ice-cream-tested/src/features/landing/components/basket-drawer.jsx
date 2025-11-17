import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromBasket,
  clearBasket,
} from "../../../store/basket-slice";
import { toast } from "react-toastify";

const BasketDrawer = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.basket
  );

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromBasket(id));
    toast.info("Ürün sepetten çıkarıldı");
  };

  const handleConfirmOrder = () => {
    if (items.length === 0) return;

    dispatch(clearBasket());
    toast.success("Siparişiniz alındı! Teşekkür ederiz 🎉");
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  const handleKeyDown = (e, callback) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      callback();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        data-testid="backdrop"
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out sm:w-[420px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="basket-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-6">
          <h2 id="basket-title" className="text-xl font-bold text-gray-900">
            Sepetim
            {totalQuantity > 0 && (
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({totalQuantity} ürün)
              </span>
            )}
          </h2>
          <button
            type="button"
            tabIndex="0"
            aria-label="Sepeti kapat"
            onClick={handleClose}
            onKeyDown={(e) => handleKeyDown(e, handleClose)}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600  focus-visible:outline-2 focus-visible:outline-rose-500"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="rounded-full bg-gray-100 p-6">
                <ShoppingBag
                  className="h-16 w-16 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-900">
                Sepetiniz boş
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Lezzetli dondurmalarımızı sepete ekleyerek başlayın
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-gray-300"
                >
                  {/* Product Image */}
                  <div
                    className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg ${item.accent}`}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-gray-500">
                        {item.serving}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          tabIndex="0"
                          aria-label={`${item.id} miktarını azalt`}
                          onClick={() => handleDecrease(item.id)}
                          onKeyDown={(e) =>
                            handleKeyDown(e, () => handleDecrease(item.id))
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-600 transition hover:border-gray-400 hover:bg-gray-50  focus-visible:outline-2 focus-visible:outline-rose-500"
                        >
                          <Minus className="h-4 w-4" aria-hidden="true" />
                        </button>

                        <span className="min-w-8 text-center text-sm font-semibold text-gray-900">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          tabIndex="0"
                          aria-label={`${item.id} miktarını artır`}
                          onClick={() => handleIncrease(item.id)}
                          onKeyDown={(e) =>
                            handleKeyDown(e, () => handleIncrease(item.id))
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-600 transition hover:border-gray-400 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-rose-500"
                        >
                          <Plus className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-gray-900">
                          ₺{item.totalPrice.toFixed(2)}
                        </span>

                        {/* Remove Button */}
                        <button
                          type="button"
                          tabIndex="0"
                          aria-label={`${item.id} ürününü sepetten çıkar`}
                          onClick={() => handleRemove(item.id)}
                          onKeyDown={(e) =>
                            handleKeyDown(e, () => handleRemove(item.id))
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-rose-500"
                        >
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">
                Toplam
              </span>
              <span className="text-2xl font-bold text-rose-600">
                ₺{totalAmount.toFixed(2)}
              </span>
            </div>

            <button
              type="button"
              tabIndex="0"
              aria-label="Siparişi onayla"
              onClick={handleConfirmOrder}
              onKeyDown={(e) => handleKeyDown(e, handleConfirmOrder)}
              className="w-full rounded-xl bg-rose-600 px-6 py-4 text-center font-semibold text-white shadow-lg transition hover:bg-rose-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
            >
              Siparişi Onayla
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default BasketDrawer;
