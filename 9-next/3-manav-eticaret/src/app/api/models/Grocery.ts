import mongoose, { Schema } from "mongoose";

export interface IGrocery {
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
}

const grocerySchema = new Schema<IGrocery>({
  name: {
    type: String,
    required: [true, "isim değeri zorunludur"],
  },
  category: {
    type: String,
    required: [true, "kategori değeri zorunludur"],
  },
  price: {
    type: Number,
    required: [true, "fiyat değeri zorunludur"],
  },
  unit: {
    type: String,
    required: [true, "birim değeri zorunludur"],
  },
  stock: {
    type: Number,
    required: [true, "stok değeri zorunludur"],
  },
  origin: {
    type: String,
    required: [true, "menşei değeri zorunludur"],
  },
  isOrganic: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: [true, "açıklama değeri zorunludur"],
    maxLength: [300, "açıklama 300 karakterden uzun olamaz"],
  },
  nutritionalValue: {
    type: String,
    required: [true, "besin değeri zorunludur"],
  },
  expiryDays: {
    type: Number,
    required: [true, "raf ömrü değeri zorunludur"],
  },
  photo: {
    type: String,
  },
});

// Her importta yeniden model oluşturmasını önlemek için önce mevcut modellerin arasında Grocery model var mı kontrol ediyoruz varsa onu export ediyoruz yoksa yenisini oluşturup export ediyoruz
const Grocery = mongoose.models?.Grocery || mongoose.model("Grocery", grocerySchema);

export default Grocery;
