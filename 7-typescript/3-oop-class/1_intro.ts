/*
 ! OOP (Object Orianted Programming)
 * Nesne yönelimli programlama, yazılım geliştirme sürecinde kullanılan bir tekniktir.
 * Bu yaklaşım gerçek hayattaki kavramları koda uyarlar.
 * Kod tekrarını azaltır
 * Daha düzenli, modüler bir yapı kurmak için tercih edilir
 
 * OOP'nin Temel Kavramları
 * Sınıf (Class)
 * Nesne (Object)
 * Kalıtım (Inheritance)
 * Interface
 * Çok Bicimlik (Polymorhisim)
 * Kapsülleme (Encapsulation)
 * Soyutlama (Abstraction)
  
 * Sınıf: Nesnelerin üretilmesi için kullanılan şablonlardır.
 * Nesne: Sınıftan üretilen gerçek örnektir.
 * Interface: Bir sınıfın veya nesnenin tipini tanımlamak için kullanılır.
 * Inheritance: Bir sınıfın özellik ve methodlarını farklı bir sınıfa aktarmak.
 * Polymorhisim: Aynı isimdeki fonksiyonların farklı görevleri yapması.
 * Encapsulation: Verilerin dışarıdan doğrudan erişilmesini engellemek ve kontrollü erişim  sağlamak.
 * Abstraction: Gereksiz detayları gizleyip, önemli bilgileri ve davranışları öne çıkarma.
*/

/*
 ! Class (Sınıf)
 * Sınıflar nesnelerin şablonudur.
 * Bir sınıf, belirli türdeki nesneler için özellik ve fonksiyon tanımlar.
 * Örneğin "Araba" sınıfı bir arabanın sahip olucağı özellikleri (renk,marka,model) ve davranışlarını (hızlanma,frenleme,vites değiştirme) tanımlar.
*/

class EskiTelefon {
  // properties (özellikleri)
  marka: string = "Samsung";
  telefonTipi: string = "Entegre";
  tusTakimi: string = "Çevirmeli";

  // methods
  ahizeAc(): void {
    console.log("ahize açlıyor");
  }

  numaraCevir(tel: string) {
    console.log(tel + " çalıyor..");
  }
}

/*
 ! Class Kullanımı
 * Class'ı tanımlamak tek başına bir anlam iafe etmez.
 * Fonksiyonlarda olduğu gibi fonksiyonları tanımladıktan sonra çalışıtrırız ve göreivini yapar.
 * Class'larda da durum aynıdır class'ı new ile çağırırız ve bize yeni bir nesne oluşturur
 * Class'ın oluşturduğu bu nesneye "instance" (örnek) denir
*/

const telefon1 = new EskiTelefon();
const telefon2 = new EskiTelefon();

telefon2.marka = "Nokia";
telefon2.telefonTipi = "Dikey";
telefon2.tusTakimi = "Farklı";

console.log(telefon1);
console.log(telefon2);
telefon1.ahizeAc();
telefon1.numaraCevir("055443234");
