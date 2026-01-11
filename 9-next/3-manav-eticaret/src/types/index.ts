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

export type ProductsRes = Promise<{ groceries: Product[] }>;

export type ProductRes = Promise<{ grocery: Product }>;
