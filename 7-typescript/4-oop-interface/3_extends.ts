/*
 ! Interface Extends
 * Inteface'ler extends ile type'larda olduğu gibi farklı bir/birkaç interface i miras alabilir.
 * Miras alama extends anahtar kalimesi ile gerçekleşir.
 * Class'lardan farklı olarak istersek birden fazla elemani miras alabiliyoruz
*/

// Bir interface oluşturalım
interface IEvEsyasi {
  isim: string;
  fiyat: number;
  marka: string;
}

// interface'i bir nesne tipi tanımında kullanalım
const masa: IMobilya = {
  isim: "Bilgisayar Masası",
  fiyat: 24500,
  marka: "IKEA",
  renk: "Kahverengi",
};

// yeni bir interface
interface IMobilya {
  isim: string;
  fiyat: number;
  marka: string;
  renk: string;
}

// farklı bir interface daha oluşturalım
interface IElektronik {
  garantiSuresi: number;
  sarjlıMı: boolean;
  batarya: number;
}

// birden fazla interface'i miras alalım
interface IUrun extends IElektronik, IMobilya {
  id: string;
}

// interface'i bir nesne tipi tanımında kullanalım
const bilgisayar: IUrun = {
  id: "1",
  garantiSuresi: 4,
  sarjlıMı: false,
  batarya: 95,
  isim: "Macbook",
  marka: "Apple",
  fiyat: 45000,
  renk: "gri",
};

/*
 ! Challange
 * İlk olarak iki farklı interface oluşturun
 * Ardından 3. bir interafce oluşturup ilk 2 interface'i miras olarak alıp genişletelim
 * Son olarak bu 3. interface'i bir nesne tipi tanımında kullanalım
*/

interface IUser {
  ad: string;
  soyad: string;
  yas: number;
}
interface IOgrenci {
  okul: string;
  sinif: number;
}
interface ICalisan extends IUser, IOgrenci {
  sirket: string;
  pozisyon: string;
}
const calisan: ICalisan = {
  ad: "Alperen Buğra",
  soyad: "Uzun",
  yas: 25,
  okul: "Kocaeli Üniversitesi",
  sinif: 5,
  sirket: "IOT YAZILIM",
  pozisyon: "Junior React Developer",
};

// Cevap
interface Urun {
  model: string;
  marka: string;
  renk: string;
  yil: number;
}

interface Bilgisayar {
  isletimSistemi: string;
  ram: number;
}

interface Telefon extends Urun, Bilgisayar {
  fiyat: number;
}

const urun1: Telefon = {
  model: "Galaxy S21",
  marka: "Samsung",
  renk: "Siyah",
  yil: 2021,
  isletimSistemi: "Android",
  ram: 8,
  fiyat: 7999,
};

// Cevap
interface IKitap {
  isim: string;
  sayfa: number;
  fiyat: number;
}

interface IBardak {
  büyüklüğü: boolean;
  rengi: string;
  fiyat: number;
}

interface IUrun1 extends IKitap, IBardak {
  yazari: string;
}

const urun3: IUrun1 = {
  isim: "hatırlıSatırlar",
  fiyat: 200,
  sayfa: 500,
  yazari: "EbulFerec",
  büyüklüğü: true,
  rengi: "siyah",
};

// Cevap
interface ICar {
  marka: string;
  model: string;
  yıl: number;
  km: number;
}

interface IUser2 {
  ad: string;
  soyad: string;
}

interface KiralıkArac extends ICar, IUser2 {
  gun: number;
}

const urun4: KiralıkArac = {
  marka: "mercedes-benz",
  model: "E 200",
  yıl: 1994,
  km: 50000,
  ad: "serdar",
  soyad: "mete",
  gun: 2,
};

// cevap
interface IAyakkabi {
  marka: string;
  beden: number;
  stok: boolean;
}

interface IGiysi {
  isim: string;
  fiyat: number;
  renk: string;
  woman: boolean;
}

interface IUrun2 extends IAyakkabi, IGiysi {
  model: string;
}

const elbise: IUrun2 = {
  model: "uzun boy",
  isim: "gece elbisesi",
  fiyat: 300,
  renk: "kirmizi",
  woman: true,
  marka: "tüzün",
  stok: false,
  beden: 38,
};

// Cevap
interface Kitapbilgileri {
  baslik: string;
  sayfaSayisi: number;
}

interface Yazarbilgileri {
  yazarAdi: string;
  ulke: string;
}

interface DetaylıKitap extends Kitapbilgileri, Yazarbilgileri {
  yayınyılı: number;
}

const kitap: DetaylıKitap = {
  baslik: "Simyacı",
  sayfaSayisi: 184,
  yazarAdi: "Paulo Coelho",
  ulke: "Brezilya",
  yayınyılı: 1988,
};
