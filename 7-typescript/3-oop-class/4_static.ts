/*
 ! Static
 * Static anahtar kelimesi özelliği veya methodu sınıfın örneği alınmadan kullanılabilir hale getirir.
 * Static methodlar class'ın sahip olduğu özellikleri kullanamaz
  
  
 * Date.now();
 * Math.random();

*/

//! Static Method
class Matematik {
  x: number = 10;

  topla(y: number) {
    console.log(this.x + y);
  }

  static carp(a: number, b: number) {
    console.log(a * b);
  }
}

// static olmayan topla() fonksiyonuna erişelim
// normal methodlara eirşmek için sınıftan örnek almalıyız
new Matematik().topla(20);

// static olan carp() fonksiyonuna erişelim
// static methodlara erişmek için sınıftan örnek almamıza gerek yoktur
Matematik.carp(8, 9);

// ## Sıklıkla kullandığımız statik olan / olmayan methodlar

// statik olmayan (örnek almam gereken) (new kullanılan)
new Date("2026-02-04").toLocaleDateString();

// statik olan (örnek almam gerekmeyen) (new kullanılmayan)
Date.now();

//! Static Property
// Doğrudan class üzerinden erişebileceğimiz değişkenler
class Ogrenci {
  isim: string;
  static ogrenciSayisi: number = 0;

  constructor(isim: string) {
    // normal özelliği değiştirme
    this.isim = isim;
    // statik özelliği değiştirme
    Ogrenci.ogrenciSayisi++;
  }
}
new Ogrenci("Ahmet");
new Ogrenci("Mehmet");
new Ogrenci("Ayşe");
new Ogrenci("Zeynep");

console.log(Ogrenci.ogrenciSayisi);
