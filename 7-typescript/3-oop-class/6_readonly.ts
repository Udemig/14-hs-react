/*
 ! Readonly
 * readonly anahtar kelimesi class'ın veya nesnenin özelliklerini sadece okunaiblir olmasını sağlar
  
 * readonly ile tanımladığımız özelliklere değer ataması:
 * * sınıflarda sadece constructor içerisinde değer atanabiliriz.
 * * nesnelerde ise sadece nesne oluştururken değer atayabiliriz.
*/

//? Nesnelerdeki Kullanım

// nesne tipi tanımlayalım
type Insan = {
  ad: string;
  soyad: string;
  readonly tcNo: string;
};

// nesneye değer ataması yapalım
const kisi: Insan = {
  ad: "Faruk",
  soyad: "Ateş",
  tcNo: "0746456344234",
};

kisi.ad = "Mehmet";
kisi.soyad = "Kaya";
// kisi.tcNo = "1243248367435435"; //! readonly olduğu için değiştirilemez

//? Class'lardaki kullanım
class Kitap {
  public isim: string;
  protected sayfa: number;
  private readonly yazar: string = "Orhan pamuk"; // tanımlarken değer atanabilir

  constructor(isim: string, sayfa: number, yazar: string) {
    this.isim = isim;
    this.sayfa = sayfa;
    this.yazar = yazar; // constructor içerisinde değer atanabilir
  }
}

const kitap = new Kitap("Kuyucaklı Yusuf", 100, "Sabahattin Ali");
console.log(kitap);
kitap.isim = "Deneme";
// kitap.sayfa = 200;
// kitap.yazar = "hey" //! hata: yazar readonly

/*
 ! Challange
 * Bir class tanımlayın ve class'tan örnek oluşturun
 * Bu class en az 4 özelliğe sahip olsun
 * En az 1 özelliği readonly olsun
 * Erişim belirteçleri kullanılsın
*/

// Cevap
class Honeyland {
  public name: string;
  private readonly director: string = "Tamara Kotevska";
  public duration: number;
  public releaseDate: [number, string, number?];
  protected awardReceived: boolean;

  constructor(name: string, duration: number, releaseDate: [number, string, number?], awardReceived: boolean) {
    this.name = name;
    this.duration = duration;
    this.releaseDate = releaseDate;
    this.awardReceived = false;
  }
}

const honeyland = new Honeyland("Honeyland", 87, [31, "January", 2020], false);
