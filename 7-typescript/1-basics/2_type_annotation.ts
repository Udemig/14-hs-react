/*
 ! Type Annotation
 * Javascript'te değişkenin türünü belirleme gibi bir özellik söz konusu değildir.
 * Fakat typescript'te tanımladığımız değişkenlerin tiplerini biz belirleyebiliyoruz
 * Bu sayede değer ataması yaparken belirlenen tip kısıtlamasının dışarısına çıkamıyoruz.
 * Bu olay kodda oluşabilecek hataların daha erken tespit edilmesini sağlar.
*/

let foo: number = 10;

foo = 20;

/*
 * Javascript'te bulunana veri tipleri:
 * number
 * string
 * boolean
 * null
 * undefined
 * array >
 * object >
 * function >
 * symbol
 * bigint
 */

let value1: string = "udemig";
let value2: number = 43;
let value3: boolean = true;
let value4: null = null;
let value5: undefined = undefined;
let value6: object = {};
let value7: object = [];
let value8: object = () => {};
let value9: symbol = Symbol("123");
let value10: bigint = 10n;

/*
 ! Type Inferance
 * Eğer bir değişkenin tipini belirtmezsek typescript kendisi değişkenin değerine göre belirler
 * Bu özelliği mümkünse hiç kullanmazsak daha iyi (Bazen olması gereken tipe nazaran yanlış tip belirleyebiliyor)
 */

let value11 = "ahmet";
