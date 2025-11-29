/*
 ! Contructor (Yapıcı)
 * Constructor methodu oluşturulan nesnenin değerlerini dışarıdan almaya yarar
 * Constructor sayesinde bir class'tan oluşturulan bütün nesneler birbirinin kopyası olmaz.
 * Constructor new anahtar kelimesi ile class'ı çağırdığımızda çalışan ilk koddur.
 * Construct ile class'a gelen parametrelere erişebiliriz
*/

class İnsan {
  // Özellikleri
  isim: string;
  soyad: string;
  yas: number;

  // Constructor
  constructor(i: string, s: string, y: number) {
    this.isim = i;
    this.soyad = s;
    this.yas = y;
  }

  // Methodları
  konus() {
    console.log(`Merhaba benim adım ${this.isim} ${this.soyad} ve ${this.yas} yaşındayım`);
  }
}
const insan1 = new İnsan("Ahmet", "Yılmaz", 35);
const insan2 = new İnsan("Ftma", "Yılmaz", 25);
console.log(insan1);
console.log(insan2);

/*
 ! Challange
 * Bir teknolojik / ev aleti için bir class oluşturun.
 * Bu class'tan oluşturduğunuz nesneler değerlerini parametre olarak almalı (constructor)
 * Bu class en az 4 özellik ve 1 method içermelidir.
 * Class'tan bir örnek oluşturun (new ile)
*/

// Cevap - 1:
class Mikrodalga {
  marka: string;
  model: string;
  guc: number;
  hacim: number;

  constructor(marka: string, model: string, guc: number, hacim: number) {
    this.marka = marka;
    this.model = model;
    this.guc = guc;
    this.hacim = hacim;
  }

  calistir() {
    console.log(
      `📡 ${this.marka} ${this.model} mikrodalgası ${this.guc}W gücünde çalışıyor. Hacmi ${this.hacim} litredir.`
    );
  }
}

const md1 = new Mikrodalga("Samsung", "MX450", 1200, 28);
md1.calistir();

// Cevap - 2:
class Robot {
  ad: string;
  model: string;
  batarya: number;
  yas: number;

  constructor(ad: string, model: string, batarya: number, yas: number) {
    this.ad = ad;
    this.model = model;
    this.batarya = batarya;
    this.yas = yas;
  }

  startCleaning(): void {
    console.log(`${this.ad} ${this.model} sarj islemine basladı!`);
  }
}

const Robor2 = new Robot("x", "m4", 5000, 2);

Robor2.startCleaning();

// Cevap - 3:
class TeknolojikAlet {
  ad: string;
  marka: string;
  fiyat: number;
  enerjiSinifi: string;

  constructor(ad: string, marka: string, fiyat: number, enerjiSinifi: string) {
    this.ad = ad;
    this.marka = marka;
    this.fiyat = fiyat;
    this.enerjiSinifi = enerjiSinifi;
  }

  bilgiVer(): string {
    return `${this.marka} marka ${this.ad}, ${this.fiyat}₺ fiyatında ve ${this.enerjiSinifi} enerji sınıfındadır.`;
  }
}

const buzdolabi = new TeknolojikAlet("Buzdolabı", "Beko", 1800, "A++");

console.log(buzdolabi.bilgiVer());

// Cevap:
class Klima {
  marka: string;
  model: string;
  kapasite: number;

  constructor(marka: string, model: string, kapasite: number) {
    this.marka = marka;
    this.model = model;
    this.kapasite = kapasite;
  }

  calis() {
    console.log(`${this.marka} ${this.model} klima ${this.kapasite} Btu kapasitesinde calisir`);
  }
}
const klima = new Klima("mitsubishi", "A Serisi", 18.0);

// Cevap:
class Bilgisayar {
  //Özellikler
  marka: string;
  islemci: string;
  bellek: string;
  ekran: string;

  //constructor
  constructor(m: string, i: string, b: string, e: string) {
    this.marka = m;
    this.islemci = i;
    this.bellek = b;
    this.ekran = e;
  }

  //method
  bilgisayarim() {
    console.log(
      ` Benim Bilgisayarımın özellikleri:  Marka: ${this.marka}, İşlemci: ${this.islemci}, Bellek: ${this.bellek}, Ekran: ${this.ekran}}`
    );
  }
}

const mycomputer = new Bilgisayar("Casper", "i7", "32GB", "16 inc");
mycomputer.bilgisayarim();
