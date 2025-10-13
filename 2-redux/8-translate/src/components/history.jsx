import { ArrowRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { clearHistory } from "../redux/slices/translateSlice";

const History = () => {
  const dispatch = useDispatch();
  const { history } = useSelector((store) => store.translateReducer);

  return (
    <div className="mt-8 bg-zinc-800/30 rounded-xl p-4 border border-zinc-700/30">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-zinc-200">Son Çeviriler</h3>

        {history.length > 0 && (
          <button
            onClick={() => dispatch(clearHistory())}
            className="text-xs text-zinc-400 hover:text-zinc-200 transition"
          >
            Temizle
          </button>
        )}
      </div>

      <div className="space-y-3 max-h-60 overflow-y-auto">
        {history.length === 0 ? (
          <div className="my-4 text-center">
            <span className="text-sm text-zinc-500">Henüz çeviri yapılmadı</span>
          </div>
        ) : (
          history.map((item) => (
            <div key={item.id} className="bg-zinc-700/50 rounded-lg p-3 border border-zinc-600/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span>{item.sourceLang.label}</span>
                  <span>
                    <ArrowRight className="size-3" />
                  </span>
                  <span>{item.targetLang.label}</span>
                </div>
                <span className="text-xs text-zinc-500">{item.timestamp}</span>
              </div>

              <div className="space-y-2">
                <div>
                  <p className="text-sm text-zinc-300 line-clamp-2">{item.textToTranslate}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-300 line-clamp-2">{item.translatedText}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;
