import { useState, useCallback } from "react";
import Display from "./display";

const SecondExa = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  /*
   * Component her render olduğunda bu fonksiyon yeniden oluşur
   * Bu fonksiyonu prop olarak gönderdiğimiz component React.memo() kullanıyor olsa bile her render sırasında farklı bir fonksiyon gönderdiğimiz için react.memo() işlevini yapamıyor.
   * Yapmamız gereken her render sırasında fonksiyonun yeniden oluşmasını engellemek
   */
  const increase = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>React.memo()</h1>

      <Display count={count} increase={increase} />

      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>İsminiz: {name}</h2>
    </div>
  );
};

export default SecondExa;
