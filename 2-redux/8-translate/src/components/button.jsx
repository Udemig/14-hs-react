import { Languages } from "lucide-react";
import { useDispatch } from "react-redux";
import { translateText } from "../redux/actions";

const Button = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={() => dispatch(translateText())}
        className="relative px-3 py-3 rounded-xl font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 active scale-95 disabled:cursor-not-allowed disabled:from-zinc-700"
      >
        <div className="flex items-center gap-2">
          <Languages className="size-5" />
          <span>Çevir</span>
        </div>
      </button>
    </div>
  );
};

export default Button;
