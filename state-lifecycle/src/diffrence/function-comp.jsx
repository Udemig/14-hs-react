// useState hook'unu react'tan import ederiz
import { useState } from "react";

const FunctionComp = (props) => {
  /*
    intialState: useState tutucağı verinin ilk değerini parametre olarak alır
    useState geriye bir dizi içerisinde iki tana veri döndürür
    1) tutuğumuz state (veri)
    2) state'i güncellemeye yarayan fonksiyon
  */
  const [count, setCount] = useState(0);
  console.log("render oldu");

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
