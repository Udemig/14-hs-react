import React from "react";

export interface NavItem {
  icon: React.ReactNode;
  name: string;
  url?: string;
}

export interface Order {
  id: string;
  order_id: number;
  user_id: number;
  order_date: string;
  status: "Shipped" | "Delivered" | "Processing";
  total_price: number;
  shipping_address: {
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  items: {
    product_id: number;
    name: string;
    quantity: number;
    price: number;
  }[];
}

export interface GraphData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
    tension: number;
    borderDash: [number, number]; // tuple
  }[];
}
