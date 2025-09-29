import { useReducer } from "react";
import counterReducer from "../reducer/counterReducer";

const Counter = () => {
  /*
   * useReducer hooku parametre olarak iki şey ister
   * 1) reducer fonksiyonu
   * * state'in nasıl değişeceğine karar veren fonksiyon
   * 2) initial state
   * * state'in başlangıç değeri
    
   * useReducer'u çağırdığımızda geriye dizi içerisinde iki değer döndürür
   * 1) state'in güncel değeri
   * 2) action'u reducer'a aktarmaya yarayan dispatch fonksiyonu
   */
  const [state, dispatch] = useReducer(counterReducer, 1);

  return (
    <div>
      <h1>Sayaç: {state}</h1>

      <div>
        <button onClick={() => dispatch({ type: "SIFIRLA" })}>Sıfırla</button>
        <button onClick={() => dispatch({ type: "AZALT" })}>Azalt</button>
        <button onClick={() => dispatch({ type: "ARTTIR" })}>Arttır</button>
      </div>
    </div>
  );
};

export default Counter;
