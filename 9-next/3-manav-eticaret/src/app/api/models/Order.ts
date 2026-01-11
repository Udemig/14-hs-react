import mongoose, { Schema } from "mongoose";
import Grocery from "./Grocery";

export interface IOrderItem {
  product: Schema.Types.ObjectId;
  quantity: number;
  price: number;
  name: string;
}

export interface IOrder {
  _id: string;
  items: IOrderItem[];
  total_amount: number;
  currency: string;
  customer_id: string;
  customer_name: string;
  customer_phone: string;
  delivery_address?: string;
  is_delivery: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const orderItemSchema = new Schema<IOrderItem>(
  {
    product: { type: Schema.ObjectId, ref: "Grocery", required: true },
    quantity: { type: Number, required: true, default: 1 },
    price: { type: Number, required: true },
    name: { type: String, required: true },
  },
  { _id: false }
);

const orderSchema = new Schema<IOrder>({
  items: [orderItemSchema],
  total_amount: { type: Number, required: true },
  currency: { type: String, default: "TRY" },
  customer_id: { type: String, required: true },
  customer_name: { type: String, required: true },
  customer_phone: { type: String, required: true },
  delivery_address: String,
  is_delivery: { type: Boolean, default: false },
});

const Order = mongoose.models.Order || mongoose.model<IOrder>("Order", orderSchema);

export default Order;
