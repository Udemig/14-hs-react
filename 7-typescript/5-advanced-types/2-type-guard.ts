/*
 ! Type Guard
 * Type guards'ın amacı belirli türdeki değerleri kontrol etmek ve bu türe özgü işlemler gerçekleştirmek için kullanılır.
 * 2 farklı type guard tekniği vardır:
 * 1. typeOf
 * 2. instanceOf
*/

// 1) typeOf ile typeGuard tekniği uygulayalım
function log(input: string | number) {
  if (typeof input === "string") {
    input.toLowerCase();
  } else {
    input.toFixed();
  }

  input;
}

log("selamlar");
log(123);

// Örnek - 1
const formatUserInput = (input: string | number): string => {
  if (typeof input === "string") {
    // string ise boşlukları temizle ve büyük harfe çevir
    return input.trim().toUpperCase();
  } else {
    // number ise para formatına çevir
    return input.toLocaleString() + " TL";
  }
};

console.log(formatUserInput("ahmet")); // AHMET
console.log(formatUserInput(987000)); // 987.000 TL

// Örnek - 2
const formatNumber = (input: string | number): number => {
  if (typeof input === "number") {
    // input number ise direkt döndür
    return input;
  } else {
    // input string ise sayıya çevir
    const value = parseInt(input);

    // sayı değilse 0 döndür
    return isNaN(value) ? 0 : value;
  }
};

console.log(formatNumber("99"));
console.log(formatNumber("ali"));

// instanceOf nedir?
class Bird {}
class Rabbit {}

const tavsan = new Rabbit();

console.log("Tavşan nesnesi bird class'ından oluşturulan bir örnek mi?", tavsan instanceof Bird);
console.log("Tavşan nesnesi rabbit class'ından oluşturulan bir örnek mi?", tavsan instanceof Rabbit);

// instanceOf ile typeGuard tekniği uygulayalım
class Kedi {
  isim: string = "Tekir";

  miyavla(): void {
    console.log("🐈🐈🐈 miyav miyav");
  }
}

class Kopek {
  isim: string = "Karabaş";

  havla(): void {
    console.log("🐶🐶🐶 hav hav");
  }
}

// Parametre olarak aldığı hayvana göre doğru fonksiyonu çağırsın
function makeSound(animal: Kedi | Kopek): void {
  if (animal instanceof Kedi) {
    // animal parametresi Kedi class'ından oluşturulan bir nesne ise miyavla
    animal.miyavla();
  } else {
    // animal parametresi Kopek class'ından oluşturulan bir nesne ise havla
    animal.havla();
  }
}

makeSound(new Kedi());
makeSound(new Kopek());

// Gerçek Proje Örneği
class NetworkError {
  name: string = "Bağlantı Hatası";
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}

class ValidationError {
  name: string = "Doğrulama Hatası";
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}

function handleError(error: NetworkError | ValidationError | Error) {
  if (error instanceof NetworkError) {
    console.log("🛜 Ağ Hatası: ", error.message);
  } else if (error instanceof ValidationError) {
    console.log("⚠️ Doğrulama Hatası: ", error.message);
  } else {
    console.log("❌ Genel Hata: ", error.message);
  }
}

handleError(new NetworkError("Ağ bağlantısı kesildi"));
handleError(new ValidationError("Şifre doğrulanamadı"));
handleError(new Error("Genel Hata"));
