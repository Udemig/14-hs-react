import { useRef, useState } from "react"

const App = () => {
 const[count,setCount] = useState<number>(1);

 const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Arttır</button>

      <input type="number" placeholder="sayı giriniz" ref={inputRef} />
    </div>
  )
}

export default App