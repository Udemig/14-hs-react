/*
 ! Erişim Berlirteçleri
 * Class elemanları ile veri tutucağımız zamn bu bilgilerin class'ın dışarısınan erişilebilir olup olmam durumunu belirlememizi sağlar

 * Erişim Belirteçleri:
 * public: class'ın dışarısında erişilebilir.
 * protected: class'ın dışarısından erişilemez.
 * private: classs'ın dışarısından erişelemez ve hatta class'ı miras alan class'lar da erişemez

*/

// Oluşturduğumuz Class
class Ev {
  public adres: string = "İstanbul";
  protected fiyat: number = 987600;
  private sahip: string = "Ahmet Yıldırım";

  tanim() {
    console.log(`Evin bilgileri: ${this.adres}, ${this.fiyat}TL, ${this.sahip}`);
  }
}

// Miras Alan Class
class Villa extends Ev {
  tanim(): void {
    console.log(`Evin bilgileri: ${this.adres}, ${this.fiyat}TL`);
  }
}

// Class'ın Örneği (Dışarısı)
const ev = new Ev();
console.log(ev.adres);
// console.log(ev.fiyat);
// console.log(ev.sahip);

/*
 * Belirteç       Tanımlandığı Sınıf      Miras Alan Sınıf        Dışarısı
 * public              evet                     evet               evet
 * protected           evet                     evet               hayır
 * private             evet                     hayır              hayır
 */

class BankaHesabı {
  public hesapNumarasi: string;
  protected bakiye: number;
  private pin: string;

  constructor(h: string, b: number, p: string) {
    this.hesapNumarasi = h;
    this.bakiye = b;
    this.pin = p;
  }

  // public method
  public paraYatir(miktar: number): void {
    this.bakiye += miktar;
    console.log(`${miktar}₺ yatırıldı. Güncel bakiye: ${this.bakiye}₺`);
  }

  // protected method
  protected bakiyeOgren(): number {
    return this.bakiye;
  }

  // private method
  private pinDogrula(girilenPin: string): boolean {
    return girilenPin === this.pin;
  }
}

const hesap = new BankaHesabı("43897583465347", 20000, "8976");
console.log(hesap.hesapNumarasi);
hesap.paraYatir(500);
