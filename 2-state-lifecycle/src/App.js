import FunctionComp from "./diffrence/function-comp";
import ClassComp from "./diffrence/class-comp";
import Counter from "./components/counter";
import Lamb from "./components/lamb";

function App() {
  return (
    <div>
      <h1>Anasayfa</h1>

      <FunctionComp title="Bu Bir Fonksiyonel Bileşenidir" />
      <ClassComp title="Bu Bir Class Bileşenidir" />

      <Counter />

      <Lamb />
    </div>
  );
}

export default App;
