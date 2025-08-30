import { useEffect, useState } from "react";

const Countdown = () => {
  const [count, setCount] = useState(30);

  useEffect(() => {
    // her saniye sayaç değerini 1 azalt
    const id = setInterval(() => {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // componentWillUnmount: sayacı temizle
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>Geri Sayım: {count}</h1>
    </div>
  );
};

export default Countdown;
