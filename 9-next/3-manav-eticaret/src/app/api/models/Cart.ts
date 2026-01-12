import mongoose, { Schema } from "mongoose";
import { TiScissors } from "react-icons/ti";

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

const Cart = mongoose.models.Cart || mongoose.model<ICart>("Cart", cartSchema);

export default Cart;
