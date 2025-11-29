/*
 ! Inheritance (Kalıtım / Miras)
 * Bir oop kavramıdır. Bir sınıfın farklı bir sınıfın özelliiklerini ve methodlarını miras almasını sağlar.
 * Bu işlem kodun tekrar kullanıabilirliğini arttırır ve kod orginazyonunu güçlendirir.
 * Miras her zaman "ana sınıf"'tan türetilmiş olan "alt sınıf"'lar arası gerçekleşir.
 * Alt sınıf (derived class), bir üst sınıftan (parent class) özelliklerini ve methodlarıını alır
*/

// Parent Class
class GeometrikSekil {
  isim: string;
  renk: string;

  constructor(isim: string, renk: string) {
    this.isim = isim;
    this.renk = renk;
  }

  tanit() {
    console.log(`${this.isim} isimli ve ${this.renk} renginde şekildir`);
  }
}

// Derived Class (Alt Sınıf) - Constructor Yok
class Kare extends GeometrikSekil {
  kenarSayisi: number = 4;
  kenarUzunlugu: number = 40;
}

const kare = new Kare("Kare", "Mavi");
console.log(kare);
kare.tanit();

// Derived Class (Alt Sınıf) - Constructor Var
class Daire extends GeometrikSekil {
  yariCap: number;

  constructor(yariCap: number, renk: string) {
    super("Daire", renk); // super methoduyla parent class'ın constructor'ına değer gönderiyoruz
    this.yariCap = yariCap;
  }
}

const daire = new Daire(25, "pembe");
console.log(daire);
daire.tanit();

// Parent Class
class Arac {
  marka: string;
  model: string;

  constructor(marka: string, model: string) {
    this.marka = marka;
    this.model = model;
  }

  calistir() {
    console.log("Araca giriş yapılıyor");
  }
}

// Derived Class
class Otomobil extends Arac {
  beygir: number;
  yakitTipi: string;

  constructor(marka: string, model: string, beygir: number, yakitTipi: string) {
    super(marka, model);
    this.beygir = beygir;
    this.yakitTipi = yakitTipi;
  }

  // yeni method ekle
  gazaBas(): void {
    console.log("Gaza basılıyor");
  }
}

const bmw = new Otomobil("Bmw", "x4", 225, "benzin");
console.log(bmw);
bmw.calistir();
bmw.gazaBas();

// Bir class aynı anda birden fazla class'ı miras alamaz
// Ama mirass alama olayı birden fazla kez gerçekleşebilir

class Human {
  eyeColor: string = "";
}

class Father extends Human {
  eyeColor: string = "Kahverengi";
}

class Mother extends Human {
  eyeColor: string = "Mavi";
}

class Child extends Father {} // hem anne hem baba class'ını aynı anda miras alma şansımız yok

const child = new Child();
console.log(child);
