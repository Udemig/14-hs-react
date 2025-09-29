import { useState, useMemo } from "react";

const FirsExa = () => {
  const [count, setCount] = useState(1);

  /*
   * Bir react bileşeni her render olduğunda içerisindeki fonksiyon / yapılan hesaplamalar tekrar çalışır
   * Eğerki bu hesaplama kapsamlıysa her render sırasında tekrar tekrar yapılması aşırı bellek / işlemci kullanımından dolayı performans sorunlarına yol açar
   * useMemo() hesaplamayı yapar ardından hesaplama sonucunu önbellek / cache'de saklar
   * Component her render olduğunda hesaplamayı baştan yapmak yerine daha önce yapıp önbellekte tuttuğu sonucu getirir
    
   * useMemo() olmadan                     useMemo() ile
   * 1m elemanlı diziyi dön > 3sn          1m elemanlı diziyi dön > 3sn
   * 1m elemanlı diziyi dön > 3sn          1m elemanlı diziyi dön > 0.1sn  
   * 1m elemanlı diziyi dön > 3sn          1m elemanlı diziyi dön > 0.1sn 
   */

  const formatted = useMemo(() => {
    // örn: bu 10k elemanlı dizi api'dan geldi
    const array = new Array(100).fill("Udemig");

    // dizi isteidğimiz formatta gelmediği için güncelleyelim
    return array.map((item) => item + " Akademi");
  }, []);

  return (
    <div>
      <h1>useMemo()</h1>

      <h2>{formatted[0]}</h2>

      <button onClick={() => setCount(count - 1)}>-</button>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default FirsExa;
