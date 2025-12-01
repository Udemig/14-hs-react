/*
 ! Type Casting - Tür Dönüşümü
 * Bir değişkenin tanımlanmasının ardından kullanılcağı yere özel bir tipte algılanması için type casting kullanılır.
 * "as" operatörü ile kullanıldığı kod satırına özel değişkenin tipini değiştirebiliriz
*/

type Product = {
  name: string;
  price: number | string;
};

let product: Product = {
  name: "Laptop",
  price: 4500.99,
};

/*
 * Normalde price string veya number olabileceğinden product.price number olmasına rağmen toFixed() kullanmayız.
 * Ama biz product.price'ın number olduğunu bildiğimiz için as kullanarak aşağıdaki kod satırına özel türünü değiştiriyoruz.
 * Bu sayede number'a özgü olan toFixed() methodunu kullanabildik
 */
(product.price as number).toFixed(1);

// Örnek - 2
// Bu kişi veriisi bize firebase'den gelmiş olsun (type'ınıda firebase belirliemiş olsun)
let kisi: unknown = {
  name: "John",
  age: 30,
  address: "123 main st.",
};

// kişi nesnesinin tipi unknown olduğu için name özelliğine erişemeyiz
// console.log(kisi.name); //! HATA

// nesne için bir tip oluşturucam
interface IPerson {
  name: string;
  age: number;
  address: string;
}

// kişi nesnenin name değerine erişebilmek için tür dönüşümü yapalım
console.log((kisi as IPerson).name);
