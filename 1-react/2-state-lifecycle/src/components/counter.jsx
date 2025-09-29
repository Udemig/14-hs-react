// useState hook'unu react'tan import ederiz
import { useState } from "react";

const Counter = (props) => {
  /*
   * React'da arayüzde değişme sebep olucak bütün veirler state'de tutulur

   * useState parametre olarak tutucağımız verinin başlangıç değerini alır (initialState)
   * useState fonksiyonun çağırıca geriye dizi içerisinde 2 veri döndürür.
   * [stateDegeri, stateGüncellemeFonksiyonu] return eder
   * bu veriye ve methoda daha rahat erişebilmek için array destructuring yöntemi kullanırız 
   
   * State'in değerini her güncellediğimizde gerçekleşen güncellemenin arayüze yansıması için component otomatik olarak yeniden render olur
   */
  const [stateDegeri, stateGuncelle] = useState(0);

  const handleDec = () => {
    stateGuncelle(stateDegeri - 1);
  };

  const handleInc = () => {
    // setState methodu 1. kullanım
    // aynı fonksiyon içerisinde state'i 1'den fazla kere güncelleyemiyoruz
    stateGuncelle(stateDegeri + 1); // 0 + 1
    stateGuncelle(stateDegeri + 1); // 0 + 1
    stateGuncelle(stateDegeri + 1); // 0 + 1
    stateGuncelle(stateDegeri + 1); // 0 + 1
    stateGuncelle(stateDegeri + 1); // 0 + 1

    // setState mothodu 2. kullanım
    // aynı fonksiyon içerisinde state'i 1'den fazla kere güncelleyebiliyoruz
    stateGuncelle((oncekiDeger) => oncekiDeger + 1); // 0 + 1
    stateGuncelle((oncekiDeger) => oncekiDeger + 1); // 1 + 1
    stateGuncelle((oncekiDeger) => oncekiDeger + 1); // 2 + 1
    stateGuncelle((oncekiDeger) => oncekiDeger + 1); // 3 + 1
    stateGuncelle((oncekiDeger) => oncekiDeger + 1); // 4 + 1
  };

  return (
    <div>
      <h1>{props.title}</h1>

      <div>
        <button onClick={handleDec}>-</button>

        <span>{stateDegeri}</span>

        <button onClick={handleInc}>+</button>
      </div>
    </div>
  );
};

export default Counter;
