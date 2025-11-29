/*
 ! Abstract Class (Soyut Sınıf)
 * Abstract class'lar sınıflar için birebir şablon görevi görür.
 * Soyut sınıflar sayesinde oluşturucağımız sınıfıların ortak özellik ve methodlarını belirleriz.
 * Soyut sınıfıların doğrudan örnekleri oluşturulamaz.
 * Bundan dolayı soyut sınıflar normal sınıflar için tip tanımı görevi görür.
*/

// Soyut sınıf
abstract class Foto {
  // normal sınıflar gibi constructor tanımı yapabiliriz
  constructor(kameraModu: string, filtre: string) {}

  // normal sınıflarda olduğu gibi method tanımlayalım
  fotoCek(): void {
    console.log("Fotoğraf çekiliyor...");
  }

  // soyut method: miras alan sınıflar kendi ihtiyaçlarına göre fonksiyonun görevini tanımlayabilir bundan dolayı {} kısmını yazmadık
  abstract fotoPaylas(kim: string): void;
}

// Soyut sınıfıların doğrudan örnekleri oluşturulamaz.
// new Foto() //!hata

// Soyut sınıfı miras alan bir child sınıf oluşturalım
class Instagram extends Foto {
  fotoPaylas(kim: string): void {
    console.log(`Foto insta'da ${kim} ile paylaşılıyor`);
  }
}

// Soyut sınıfı miras alan bir  child sınıf daha oluşturalım
class Twitter extends Foto {
  fotoPaylas(kim: string): void {
    console.log(`Foto twitter'da ${kim} ile paylaşılıyor`);
  }
}

const insta = new Instagram("arka", "siyah/filtre");
const tw = new Twitter("ön", "portre");

insta.fotoCek();
tw.fotoCek();
insta.fotoPaylas("ali");
tw.fotoPaylas("mehmet");
