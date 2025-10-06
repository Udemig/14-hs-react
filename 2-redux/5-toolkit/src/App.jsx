import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/counter";
import CRUD from "./pages/crud";
import Header from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<CRUD />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
