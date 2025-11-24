/*
 ! Optional Param
 * Normal şartlarda fonksiyonu çağırabilmemiz için parametrelerin tamamına değer göndermemiz gerekir
 * Bazı durumlarda bazı parametrelerin zorunlu olmasını istemeyebiliriz.
  
 * Tanım: (a:string,b?:string) => bu kullanımda a zorunlu b ise opsiyone olur
 !!! Opsiyonel bir parametrenin ardından zorunlu bir parametre gelemez
*/
function exaFunction(par1, par2, par3) {
    console.log("1.parametre", par1);
    console.log("2.parametre", par2);
    console.log("3.parametre", par3);
}
// exaFunction(1, "selam", true);
// exaFunction(1, "selam");
// exaFunction(1);
// exaFunction(1, undefined, true);
// Örnek
var karsilama = function (isim, zaman) {
    if (zaman) {
        return "".concat(zaman, " ").concat(isim);
    }
    return "Merhaba, ".concat(isim);
};
console.log(karsilama("Ahmet", "İyi akşamlar"));
console.log(karsilama("Ahmet"));
