import * as yup from "yup";

// YUP Şeması ile formdaki alanların geçerli olması için gerekli koşulları belirle
export const PLACE_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required("isim alanı zorunludur")
    .min(3, "isim en az 3 karakter olmalıdır")
    .max(40, "isim en fazla 40 karakter olabilir"),
  location: yup
    .string()
    .required("konum alanı zorunludur")
    .min(3, "konum en az 3 karakter olmalıdır")
    .max(40, "konum en fazla 40 karakter olabilir"),
  address: yup
    .string()
    .required("adres alanı zorunludur")
    .min(3, "adres en az 3 karakter olmalıdır")
    .max(40, "adres en fazla 40 karakter olabilir"),
  description: yup
    .string()
    .required("açıklama alanı zorunludur")
    .min(10, "açıklama en az 10 karakter olmalıdır")
    .max(200, "açıklama en fazla 200 karakter olabilir"),
  amenities: yup
    .string()
    .required("özellikler alanı zorunludur")
    .min(3, "özellikler alanı en az 3 karakter olmalıdır")
    .max(80, "özellikler alanı en fazla 80 karakter olabilir"),
  rating: yup
    .number()
    .required("puan zorunludur")
    .min(1, "puan en az 1 olmalıdır")
    .max(5, "puan en fazla 5 olmalıdır"),
  price_per_night: yup
    .number()
    .required("fiyat zorunludur")
    .positive("fiyat pozitif olmalıdır")
    .max(999999, "fiyat en fazla 999999 olmalıdır"),
  availability: yup.boolean(),
});
