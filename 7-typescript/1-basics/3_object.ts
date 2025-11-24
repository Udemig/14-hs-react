/*
 ! Object
 * Normal şartlarda ts'de bir object type'ı mevcut
 * Ama object type'ı ucu çok açık olan bir tip olduğu için kullanmayı tercih etmiyoruz
*/

// nesne tipi tanımlamanın yanlış yolu
let data: object;
data = {};
data = [];
data = () => {};
data = new Date();

// nesne tipi tanımlamanın doğru yolu
let student: {
  id: number;
  firstName: string;
  lastName: string;
  isGraduated: boolean;
};

// belirlediğim tipe göre değerlerini ataması yapalım
student = {
  id: 123,
  firstName: "Ahmet",
  lastName: "Yılmaz",
  isGraduated: true,
};
