import { useEffect } from "react";
import Button from "./components/button";
import Footer from "./components/footer";
import Header from "./components/header";
import History from "./components/history";
import LanguageSelect from "./components/language-select";
import TextContainer from "./components/text-container";
import { useDispatch } from "react-redux";
import { getLanguages } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  return (
    <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 min-h-screen text-white grid place-items-center">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <Header />

          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-zinc-700/50">
            <LanguageSelect />
            <TextContainer />
            <Button />
          </div>

          <History />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
