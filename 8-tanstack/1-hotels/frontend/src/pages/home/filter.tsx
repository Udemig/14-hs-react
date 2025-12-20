import { useMemo, type ChangeEvent, type FC } from "react";
import { useGetPlaces } from "../../services/hooks";
import { SORT_OPTIONS } from "../../constants";
import { useSearchParams } from "react-router-dom";

const Filter: FC = () => {
  const { data } = useGetPlaces();

  const locations = useMemo(
    () => [...new Set(data?.map((item) => item.location))],
    [data]
  );

  const [searchParams, setSearchParams] = useSearchParams();

  // input/select'te seçilen değeri url'e arama parametresi olarak gönder
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    searchParams.set(name, value);

    setSearchParams(searchParams);
  };

  // temizle butonun tıklanınc
  const handleClear = () => {
    setSearchParams({});
  };

  return (
    <form className="flex flex-col gap-5 lg:gap-8 lg:mt-15 lg:sticky lg:top-24 bg-white p-6 rounded-xl shadow-lg border border-zinc-100">
      <h2 className="text-xl font-bold text-zinc-800 pb-3 border-b border-zinc-200">
        Filtrele
      </h2>

      <div className="field">
        <label className="font-semibold text-zinc-700 text-sm">
          Nereye gitmek istiyorsunuz?
        </label>

        <select name="location" className="input" onChange={handleChange}>
          <option value="">Seçiniz</option>
          {locations.map((loc) => (
            <option
              value={loc}
              key={loc}
              selected={loc === searchParams.get("location")}
            >
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label className="font-semibold text-zinc-700 text-sm">
          Konaklama noktası adı ?
        </label>
        <input
          type="text"
          name="title"
          placeholder="örn: Seaside Villa"
          className="input"
          onChange={handleChange}
          defaultValue={searchParams.get("title") || ""}
        />
      </div>

      <div className="field">
        <label className="font-semibold text-zinc-700 text-sm">
          Sıralama Ölçütü?
        </label>
        <select
          name="order"
          className="input"
          onChange={handleChange}
          defaultValue={searchParams.get("order") || ""}
        >
          <option value="">Seçiniz</option>
          {SORT_OPTIONS.map((opt) => (
            <option value={opt.value} key={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleClear} type="reset" className="btn-primary mt-2">
        Fitlreleri Temizle
      </button>
    </form>
  );
};

export default Filter;
