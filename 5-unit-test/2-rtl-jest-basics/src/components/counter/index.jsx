import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button disabled={count === 0} onClick={() => setCount(count - 1)}>
        Azalt
      </button>

      <b>{count}</b>

      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </div>
  );
};

export default Counter;
