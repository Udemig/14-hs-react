// Genericlerde Extends
// Tipi generic olarak tanımladığımız her türlü tipte değer atanmasına izin vermiş oluruz
// Bazı seneryolarda generic kullansakta bu kadar esnekliğe izin vermek istemeyebiliyoruz.
// Extends kullanrak generic tipin alabilceği tipleri sınırlandırabiliyoruz

type Container<T extends string | number> = {
  name: T;
  age: T;
};

const x: Container<string> = {
  name: "selam",
  age: "12",
};

const y: Container<number> = {
  name: 123,
  age: 56,
};

// const z: Container<boolean> = { //! Hata
//   name: true,
//   age: false,
// };

// Örnek
// Uygulamanın İsmi / API_URL gibi özelliklerini saklayan bir sınıf tanımlayalım
// Tabi bu özelliklerin değerli biribirinde farklı olucağı için generic kullanalım

class AppConfig<T extends string | number | boolean> {
  constructor(private key: string, private value: T) {}

  getValue(): T {
    return this.value;
  }

  updateValue(newValue: T): void {
    this.value = newValue;
  }
}

new AppConfig<number>("VERSION", 2.4);
new AppConfig<boolean>("isIOS", true);
const app_name = new AppConfig<string>("APP_NAME", "Instagram");

app_name.getValue();
app_name.updateValue("Twiiter");

/*
 ! Challange
 * En az 1 generic tip alan bir type/interface/fonksiyon/class yazınız
 * Tanımladığınız yapıyı en az bir kez kullanın
 * Bonus: extends kullanın
*/

interface IPhone<T extends number | string, K, Z> {
  id: T;
  model: Z;
  adet: K;
  price: K;
  ekran: Z;
}
const Phone1: IPhone<number, number, string> = {
  id: 1,
  model: "17 Pro Max",
  adet: 500000,
  price: 130000,
  ekran: "OLTP EKRAN",
};
const Phone2: IPhone<number, number, string> = {
  id: 2,
  model: "Google Pixel 10 Pro Xl",
  adet: 400000,
  price: 100000,
  ekran: "OLTP EKRAN",
};
