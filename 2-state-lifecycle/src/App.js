import FunctionComp from "./diffrence/function-comp";
import ClassComp from "./diffrence/class-comp";
import Counter from "./components/counter";
import Lamb from "./components/lamb";
import BuyList from "./components/buy-list";
import UserList from "./components/user-list";
import RecipePicker from "./components/recipe-picker";
import Countdown from "./components/countdown";
import { useState } from "react";

function App() {
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      <h1>Anasayfa</h1>

      <button onClick={() => setIsShow(!isShow)}>Gizle/Göster</button>

      {isShow && (
        <>
          <Countdown />
          {/* <RecipePicker /> */}
          {/* <UserList /> */}
          {/* <FunctionComp title="Bu Bir Fonksiyonel Bileşenidir" /> */}
          {/* <ClassComp title="Bu Bir Class Bileşenidir" /> */}
        </>
      )}

      {/* <Counter title="Sayaç" />

      <Lamb />

      <BuyList /> */}
    </div>
  );
}

export default App;
