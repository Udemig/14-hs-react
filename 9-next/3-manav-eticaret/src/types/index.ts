export interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  stock: number;
  origin: string;
  isOrganic: boolean;
  description: string;
  nutritionalValue: string;
  expiryDays: number;
  photo: string;
  __v: 0;
}

export interface Cart {
  _id: string;
  userId: string;
  items: {
    grocery: Product;
    quantity: number;
    price: number;
    name: string;
    _id: string;
  }[];
  totalAmount: number;
  __v: number;
}

export interface Order {
  _id: string;
  items: {
    product: Product;
    quantity: number;
    price: number;
    name: string;
  }[];
  total_amount: number;
  currency: string;
  customer_id: string;
  customer_name: string;
  customer_phone: string;
  delivery_address: string;
  is_delivery: boolean;
  __v: number;
}

export type ProductsRes = Promise<{ groceries: Product[] }>;

export type ProductRes = Promise<{ grocery: Product }>;

export type URLResponse = Promise<{ url: string }>;

export type CartResponse = Promise<{ cart: Cart }>;

export type OrderResponse = Promise<{ orders: Order[] }>;
