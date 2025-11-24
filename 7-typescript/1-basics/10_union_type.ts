/*
 * Union Type (Birleşmiş Tipler)
 * Bir değişkenin alabileceği birden fazla farklı türde veri varsa kullanılır.
 */

// * Örnek - 1
// * Örn: Bir şehir değişkeni var ama şehir ismi(string) mi yoksa şehir plakası(number) mı belli değil.
// * Bu tarz durumlarda hem string hem number alabileceğiniz söylemeliyiz
let city: string | number;

city = "İzmir";
city = 35;

// * Örnek - 2
// * Kullanıcnın telefon bilgilierini bir değişkene atıcaz ama telefon iphone'mu android'mi bilmiyoruz
type IOS = {
  iosVersion: number;
  aidropStatus: boolean;
  model: string;
};

type Android = {
  androidVersion: string;
  googlePlayVersion: number;
  model: string;
};

let phone: IOS | Android;

phone = {
  iosVersion: 15.6,
  aidropStatus: true,
  model: "17 Pro Max",
};

phone = {
  androidVersion: "baklava",
  googlePlayVersion: 15.6,
  model: "Galaxy S25",
};

// Union Type'ı nesnesler ile kullandığımızda
type AType = { key1: string; key2: string };
type BType = { key3: number; key4: number };

// değişkenin tipini union type ile tanımlayalım
let example: AType | BType;

// hata vermemesi için ya a tipinin bütün özelliklerini tanımlamalıyız
example = { key1: "x", key2: "y" };

// ya b tipinin bütün özelliklerini tanımlamalıyız
example = { key3: 1, key4: 2 };

// yada her iki tipin bütün özelliklerini tanımlarız
example = { key1: "x", key2: "y", key3: 1, key4: 2 };
