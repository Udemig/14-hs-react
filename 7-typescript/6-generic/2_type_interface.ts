/*
 * Fonksiyonlarda olduğu gibi generic yapısını yeniden kullanılabilir type/interface yazmak için kullanabiliriz
 */

type ArrayType<T> = {
  items: T[];
  addItem: (newItem: T) => void;
  getItem: (index: number) => T;
};

const array: ArrayType<number> = {
  items: [1, 2, 3, 4],

  addItem(newItem) {
    array.items.push(newItem);
  },

  getItem(index) {
    return array.items[index];
  },
};

// İsimlendirme
// Generic isimlendirirken genelde tek harf kullanılır
// T: Type
// K: Key
// V: Value
// E: Element
// R: Return Type
// S: State

interface IPerson<T, K> {
  name: T;
  age: K;
  id: number;
  father: T;
  mother: T;
}

const foo: IPerson<string, number> = {
  name: "Ali",
  age: 34,
  id: 123,
  father: "Ahmet",
  mother: "Ayşe",
};

// Gerçek bir proejde efektif generic kullanımı:
// Seneryo: 2 farklı API isteği attık gelen yanıtların tipini tanımlayacağız.
// Tip tanımınında kod tekrarını düşmemek için generic kullanıcaz.

interface IUser {
  id: number;
  name: string;
  age: number;
}

interface IRecipe {
  title: string;
  price: number;
  cuisine: string;
}

interface APIResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

const usersReponse: APIResponse<IUser> = {
  data: [
    {
      id: 1,
      name: "Ali",
      age: 20,
    },
  ],
  total: 60,
  page: 2,
  limit: 10,
};

const recipeResponse: APIResponse<IRecipe> = {
  data: [
    {
      title: "Margaritta Pizza",
      price: 100,
      cuisine: "Italian",
    },
  ],
  total: 60,
  page: 3,
  limit: 15,
};
