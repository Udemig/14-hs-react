import mongoose, { Schema } from "mongoose";

export interface ICartItem {
  grocery: Schema.Types.ObjectId;
  quantity: number;
  price: number;
  name: string;
}

export interface ICart {
  _id: string;
  userId: string;
  items: ICartItem[];
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

const cartItemSchema = new Schema<ICartItem>({
  grocery: { type: Schema.ObjectId, ref: "Grocery", required: true },
  quantity: { type: Number, required: true, min: 1, default: 1 },
  price: { type: Number, required: true },
  name: { type: String, required: true },
});

const cartSchema = new Schema<ICart>({
  userId: { type: String, required: true },
  items: [cartItemSchema],
  totalAmount: { type: Number, default: 0 },
});

// Sepet toplam tutarını hesapla
cartSchema.pre("save", function (next) {
  if (this.isModified("items")) {
    this.totalAmount = this.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
  // @ts-ignore
  next();
});

const Cart = mongoose.models.Cart || mongoose.model<ICart>("Cart", cartSchema);

export default Cart;
