import { FaLeaf, FaMoneyBillWave } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

export const featureList = [
  {
    icon: <MdLocalShipping />,
    title: "Hızlı Teslimat",
    description: "Aynı gün hızlı teslimat",
    color: "bg-blue-100",
  },
  {
    icon: <FaLeaf />,
    title: "Taze Ürünler",
    description: "Günlük taze ürünler",
    color: "bg-green-100",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Uygun Fiyatlar",
    description: "En uygun fiyatlar",
    color: "bg-yellow-100",
  },
  {
    icon: <FaShieldAlt />,
    title: "Güvenli Alışveriş",
    description: "Yüksek standartlarda güvenli alışveriş",
    color: "bg-red-100",
  },
];
