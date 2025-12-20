import { PlayCircle } from "lucide-react";

export const SORT_OPTIONS = [
  {
    label: "En Ucuz",
    value: "price-asc",
  },
  {
    label: "En Pahalı",
    value: "price-desc",
  },
  {
    label: "En Yüksek Puanlı",
    value: "rating-desc",
  },
  {
    label: "En Düşük Puanlı",
    value: "rating-asc",
  },
];

export const INPUT_FIELDS = [
  {
    label: "Adı",
    name: "name",
    type: "text",
    placeholder: "örnek: Seaside Villa",
  },
  {
    label: "Konum",
    name: "location",
    type: "text",
    placeholder: "örnek: Antalya",
  },
  {
    label: "Adres",
    name: "address",
    type: "text",
    placeholder: "örnek: 123 Mahallesi",
  },
  {
    label: "Açıklama",
    name: "description",
    type: "text",
    placeholder: "örnek: Bu villa ferah bir bahçeye sahip..",
  },
  {
    label: "Özellikler",
    name: "amenities",
    type: "text",
    placeholder: "örnek: Bahçe, Havuz, Spor Salonu",
  },
  {
    label: "Puan",
    name: "rating",
    type: "number",
    placeholder: "örnek: 4.5",
  },
  {
    label: "Fiyat",
    name: "price_per_night",
    type: "number",
    placeholder: "örnek: 1000",
  },
  {
    label: "Mevcutluk",
    name: "availability",
    type: "checkbox",
  },
];
