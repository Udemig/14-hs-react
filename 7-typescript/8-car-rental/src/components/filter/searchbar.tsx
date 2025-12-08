import type { FC } from "react";
import ReactSelect from "react-select";

const Searchbar: FC = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <form className="searchbar flex gap-4 items-start justify-center">
      {/* Marka */}
      <div className="searchbar-item items-end">
        <div className="w-full flex flex-col z-49">
          <label className="font-semibold mb-2 text-sm">Marka</label>

          <ReactSelect options={options} className="text-black" />
        </div>

        <button className="mb-1 search-btn sm:hidden">
          <img src="/search.svg" className="size-6" />
        </button>
      </div>

      {/* Model */}
      <div className="searchbar-item items-start flex flex-col">
        <label className="font-semibold mb-2 text-sm">Model</label>

        <div className="w-full flex items-center">
          <div className="relative flex-1">
            <img
              src="/model-icon.png"
              className="size-6 absolute left-4 top-1/2 -translate-y-1/2 z-1"
            />
            <input
              type="text"
              placeholder="Model Yazınız..."
              className="searchbar-input"
            />
          </div>
          <button className="mb-1 search-btn">
            <img src="/search.svg" className="size-6" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
