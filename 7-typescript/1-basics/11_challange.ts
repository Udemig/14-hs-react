/*
 ! Challange
 * Herkes içerisinde en az 1 tane
 * string
 * number
 * boolean,
 * array / object / tuple
 * string literal / union type
 * any
 * tiplerine sahip bir nesne tipi tanımlayın
 * ve oluşturduğunuz tipi bir değişken üzerinde kullanın
 
 * tip herhangi bir nesne hakkında olabilir: araba, kullanıcı, ürün, bilgisayar,film kitap....  
*/

type User = {
  name: string;
};

const user: User = {
  name: "Furkan",
};

// Cevap
type Car = {
  style: string;
  model: number;
};
const car: Car = {
  style: "Mercedes Benz",
  model: 2025,
};

type Kullanıcı = {
  id: number;
  isim: string;
  aktif: boolean;
  roller: string[];
  adres: { şehir: string; postakodu: number };
  cinsiyet: "erkek" | "kadın";
  bilgiler: any;
  tercihler: [string, string];
};

const kullanıcı1: Kullanıcı = {
  id: 1,
  isim: "Alperen Buğra",
  aktif: false,
  roller: ["yazılımcı", "baba"],
  adres: {
    şehir: "Marmaris",
    postakodu: 48700,
  },
  cinsiyet: "erkek",
  bilgiler: { yaş: 28 },
  tercihler: ["kahve", "cold brew"],
};

console.log(kullanıcı1);

// Cevap
// 1. Kategori Tipi (Sadece belirli değerleri alabilir)
type UrunKategorisi = "elektronik" | "bilgisayar" | "laptop";

// 2. Ürün Şeması (Interface)
interface KapsamliUrun {
  urunAdi: string;
  fiyat: number;
  stokVarmi: boolean;
  etiketler: string[];
  boyutlar: { en: number; boy: number };
  kategori: UrunKategorisi;
}

// Birden fazla etiket için dizi boyutlar:
// 3. Yeni Ürün Oluşturma (Const)
const yeniUrun: KapsamliUrun = {
  urunAdi: "Asus Rog Strix",
  fiyat: 50000,
  stokVarmi: true,
  etiketler: ["laptop", "oyunculaptop", "yeni"],
  boyutlar: { en: 30, boy: 40 },
  kategori: "elektronik",
};
console.log(yeniUrun);
