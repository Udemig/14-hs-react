import { ArrowLeftRight } from "lucide-react";
import Select from "react-select";
import { customStyles } from "../utils/constants";

const LanguageSelect = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 flex-col lg:flex-row">
        {/* kaynak dil */}
        <div className="flex-1 w-full">
          <label className="block text-sm text-zinc-300 mb-2">Kaynak Dil</label>
          <Select options={options} styles={customStyles} className="text-sm text-black" />
        </div>

        {/* değiştirme butonu */}
        <div className="flex items-center justify-center">
          <button className="size-10 lg:size-12 bg-zinc-700 hover:bg-zinc-600 disabled:bg-zinc-800 disabled:opacity-50 rounded-full flex justify-center items-center cursor-pointer">
            <ArrowLeftRight />
          </button>
        </div>

        {/* hedef dil */}
        <div className="flex-1 w-full">
          <label className="block text-sm text-zinc-300 mb-2">Hedef Dil</label>
          <Select options={options} styles={customStyles} className="text-sm text-black" />
        </div>
      </div>

      {/* Dil Sayısı */}
      <div className="text-center">
        <p className="text-xs text-zinc-500">156 dil destekleniyor</p>
      </div>
    </div>
  );
};

export default LanguageSelect;
