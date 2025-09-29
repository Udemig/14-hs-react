// useState hook'unu react'tan import ederiz
import { useState, useEffect } from "react";

const FunctionComp = (props) => {
  const [count, setCount] = useState(0);
  /*
   * useEffect 2 parametre alır
   * Bu parametreleri nasıl gönderdiğimiz useEffectin hangi yaşam döngüsü anını izleyeceğini belirler
    
   * 1.param: çalışıcak olan fonksiyon 
   * 2.param: bağımlılık dizisi (dependency array)
   */

  // Bileşenin ekrana gelme anını izle (componentDidMount)
  useEffect(() => {
    console.log("component ekrana geldi");
  }, []);

  // Bileşenin güncellenme anını izle (componentDidUpdate)
  useEffect(() => {
    console.log("count state'i veya title prop'u güncellendi");
  }, [count, props.title]);

  // Bileşenin ekrandan ayrılma anını izle (componentWillUnmout)
  useEffect(() => {
    console.log("component ekrana geldi");

    // return satırı içerisinde fonksiyon component ayrılınca çalışır
    return () => {
      console.log("component gitti");
    };
  }, []);

  // Her render anını izle
  useEffect(() => {
    console.log("her render olduğunda çalışır");
  });

  return (
    <div>
      <h3>{props.title}</h3>

      <div>
        <button onClick={() => setCount(count - 1)}>-</button>

        <span>{count}</span>

        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default FunctionComp;
