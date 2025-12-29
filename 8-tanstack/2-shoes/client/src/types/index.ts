export interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "admin";
  createdAt: string;
  updatedAt: string;
}

// Apı Cevap Tipi
export interface Response<T> {
  message: string;
  data: T;
}

//  Ürün Tipi
export interface Product {
  name: string;
  picture: string[];
  description: string;
  isNew: boolean;
  discount: number;
  size: string;
  color: string;
  gender: "men" | "women" | "unisex";
  price: number;
  updatedAt: string;
  id: string;
}

// Formdan Gelen Verinin Tipi
export interface ProductValues {
  name: string;
  price: number;
  discount: number;
  color: string;
  size: string;
  description: string;
  isNew: boolean;
  gender: "men" | "women" | "unisex";
}
