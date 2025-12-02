/*
 ! Generic
 * Bir fonksiyon'un, type'ın, class'ın, interface'in içerisindeki bazı tipleri dinamik olarak dışarıdan gelen değere bağlı değişmesini sağlar.
 * Bu durumda generic özelliği kullanarka dışarıdan parametre olarak tip alabiliyoruz.
 * Bu yapıda oluşturduğumuz type'ın.. yeniden kullanılabilir olmasını sağlar
*/

// Yazmak istedğim fonksiyon:
// 1) Parametre olarak number dizisi gelirse rastgele bir number döndürmeli
// 2) Parametre olarak string dizisi gelirse rastgele bir string döndürmeli

// Union Type Kullanmaya çalıştığımızda return tipini şartlı yazamadığımız için tip tanımlamada başarısız olduk
const getRandomElement = (array: number[] | string[]): number | string => {
  return "123";
};

getRandomElement([1, 2, 3, 4, 5]);
getRandomElement(["a", "b", "c"]);

// Aynı fonksiyonu 2 kez farklı tiplerle yazarak sorunu çözebiliyoruz ama bu seferde kod tekrarı oluyor
const getRandomString = (array: string[]): string => {
  const i = Math.round(Math.random() * array.length);
  return array[i];
};

const getRandomNumber = (array: number[]): number => {
  const i = Math.round(Math.random() * array.length);
  return array[i];
};

// Generic yardımıyla fonksiyonu tekrar yazalım
// TypeParam ismindeki Generic parametresi sayesinde array ve return tiplerini fonksiyonu kullanıcağımız zaman belirledik
const getRandom = <TypeParam>(array: TypeParam[]): TypeParam => {
  const i = Math.round(Math.random() * array.length);
  return array[i];
};

getRandom<string>(["a", "b", "c"]);
getRandom<number>([1, 2, 3, 4, 5]);

// React projesinde nerelerde kullanabilir.
// useState<string>("selam")
// axios.get<UserType>("/user")
