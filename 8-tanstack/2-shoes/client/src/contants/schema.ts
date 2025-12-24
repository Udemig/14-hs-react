import * as yup from "yup";

const nameRegex = /^[A-Za-zÇĞİÖŞÜçğıöşü\s]+$/;

const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

export const REGISTER_SCHEMA = yup.object().shape({
  firstName: yup
    .string()
    .required("Adınızı giriniz")
    .matches(nameRegex, "Adınız sadece harf içerebilir"),

  lastName: yup
    .string()
    .required("Soyadınızı giriniz")
    .matches(nameRegex, "Soyadınız sadece harf içerebilir"),

  email: yup
    .string()
    .required("E-posta adresinizi giriniz")
    .email("Geçerli bir e-posta adresi giriniz"),

  password: yup
    .string()
    .required("Şifrenizi Giriniz")
    .min(6, "Şifre 6 karakterden kısa olamaz")
    .matches(passwordRegex, "Şifreniz yeterince güçlü değil"),

  // oneOf([]) dizi içerisinde verilen değerler girilmedikçe hata fırlatır
  // ref() formdaki bir alanın değerine erişmeye yarar
  confirmPassword: yup
    .string()
    .required("Şifre tekrarını giriniz")
    .oneOf([yup.ref("password")], "Şifre tekrarını doğru girmediniz"),

  terms: yup
    .boolean()
    .oneOf([true], "Sözleşmeyi onaylamadan devam edemezsiniz"),
});

export const LOGIN_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi giriniz")
    .required("E-posta adresinizi giriniz"),

  password: yup.string().required("Şifrenizi giriniz"),
});
