/*
 ! Intersection - Kesişim / Birleşim Türler
 * Typescript'de kesişim türler iki veya daha fazla türü birleştirmek için kullanılır
*/

type AType = { key1: string };
type BType = { key2: number };

// Intersection: Her iki nesne tipinin bütün özelliklerini birleştirelim
type ABType = AType & BType;

let foo: ABType = { key1: "Merhaba", key2: 88 };

// Union Types: Belirtilen türlerden en az birinin bütün özelliklerini tanımlalyız
type AorBType = AType | BType;

let boo1: AorBType = { key1: "merhaba" };
let boo2: AorBType = { key2: 99 };
let boo3: AorBType = { key1: "merhaba", key2: 99 };

// Örnek
type Kisi = {
  id: string;
  isim: string;
};

type Iletisim = {
  eposta: string;
  telefon: string;
};

type Calisan = {
  departman: string;
  maas: number;
};

type Kullanici = {
  bakiye: number;
  aktifMi: boolean;
};

type Eleman = Kisi & Iletisim & Calisan;
type Musteri = Kisi & Iletisim & Kullanici;

const eleman: Eleman = {
  id: "1",
  isim: "Mehmet Çimen",
  eposta: "mehment@gmail.com",
  telefon: "905678899",
  departman: "IT",
  maas: 56000,
};

const musteri: Musteri = {
  id: "2",
  isim: "Ayşe Yıldız",
  eposta: "aysee@gmail.com",
  telefon: "907685432",
  bakiye: 23099,
  aktifMi: true,
};

/*
 ! Challange
 * Intersection type kullanrak birden fazla türü birleştir
 * Ortaya çıkan yeni türü nesne tipi tanımlarken kullan.
 * Yasaklı: Kisi, Kullanici,
*/

type Ekran = {
  model: string;
  sürüm: string;
};

type Kasa = {
  tasarim: string;
  dayaniklilik: number;
};

type Uretim = {
  adet: number;
  utarih: string;
};

type Android = Ekran & Kasa & Uretim;
type Ios = Ekran & Kasa & Uretim;

const android: Android = {
  model: "S25 ULTRA",
  sürüm: "LATEST",
  tasarim: "TITANIUM",
  dayaniklilik: 2,
  adet: 1000,
  utarih: "17 Ocak 2025",
};
const ıos: Ios = {
  model: "17 Pro Max",
  sürüm: "LATEST",
  tasarim: "YEKPARE ALIMINIUM",
  dayaniklilik: 2,
  adet: 50000,
  utarih: "17 Eylül 2025",
};

// Cevap
type Muzik = {
  isim: string;
  ulke: string;
};
type Dans = {
  tur: string;
  cikisYili: number;
};
type Dansci = {
  erkekMi: boolean;
  esliMi: boolean;
};
type Juri = {
  kisiSayisi: number;
  mutluMu: boolean;
};
type Yarisma = Muzik & Dans & Dansci;
type Degerlendirme = Dans & Dansci & Juri;

const yarisma: Yarisma = {
  isim: "Pa' Bailar",
  ulke: "Arjantin",
  tur: "Arhantin tango",
  cikisYili: 1918,
  erkekMi: false,
  esliMi: true,
};

const degerlendirme: Degerlendirme = {
  tur: "Arhantin tango",
  cikisYili: 1918,
  erkekMi: false,
  esliMi: true,
  kisiSayisi: 8,
  mutluMu: true,
};
