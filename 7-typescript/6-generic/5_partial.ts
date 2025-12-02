/*
 ! Partial
 * Typescript içerisinde varsayılan olarak bulunan bir type'dır.
 * Generic olarak aldığı nesnenin tüm özelliklerini opsiyonel yapar.
*/

type User = {
  username?: string;
  password?: string;
  age?: number;
};

const createUser = (data: Required<User>) => {
  // axios.post
};

const updateUser = (data: Partial<User>) => {
  // axios.patch
};

createUser({ username: "faruk", age: 23, password: "123" });
updateUser({ age: 25 });

const x: Readonly<User> = {
  username: "ali",
  age: 23,
  password: "deneme123",
};

const y: Pick<User, "username"> = {
  username: "ali",
};
