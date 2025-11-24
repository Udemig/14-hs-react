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
var user = {
    name: "Furkan",
};
var car = {
    style: "Mercedes Benz",
    model: 2025,
};
var kullanıcı1 = {
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
