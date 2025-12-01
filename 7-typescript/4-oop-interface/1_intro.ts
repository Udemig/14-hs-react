/*
 ! Interface
 * Bir nesnenin tipini tanımlamaya yarar
 * Nesnenin hangi tipte özellik ve methodlara sahip olucağını ifade eder
  
 * Type Aliases | Abstract Class | Interface
 
 ? Interface vs Abstract Class
 * Abstract class'lar aynı anda max bir class'ı miras alabilir
 * Interface'ler tek seferde birden fazla interface miras alınabilir
  
 ? Interface vs Type Aliases
 * **Nesne tipi tanımlama açısından** aralarında hiç bir fark yoktur
 * Type aliases yönteminde sadece nesne değil array / tuple / fonksiyon vb tiplerde tanımlanabilir.
 * Interface'lerde ise sadece nesne tipi tanımlanabilir
*/

// type
type UserType = {
  name: string;
  age: number;
  isMarried: boolean;
};

// interface
interface IUser {
  name: string;
  age: number;
  isMarried: boolean;
}

const kisi: UserType = {
  name: "Ali",
  age: 20,
  isMarried: true,
};

// Type ile farklı tiplerde tanımlanabilir
type NesneT = {};

type Dizi = number[];

type Fonksiyon = () => {};

type Literal = "a" | "b" | "c";

// Interface ile sadece nesne tipi tanımlanilir
interface Nesne {}
