import { Search } from "lucide-react";
import type { FC } from "react";
import ReactSelect from "react-select";
import { selectStyles } from "../../constants";
import { useAppSelector } from "../../utils/helpers";
import type React from "react";

interface Props {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;

  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const Filter: FC<Props> = ({ title, setTitle, tags, setTags }) => {
  const { notes } = useAppSelector((store) => store.note);
  const uniqueTags = [...new Set(notes.map((note) => note.tags).flat())];

  return (
    <div className="card mb-8 p-5">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Title Input */}
        <div className="flex-1 w-full md:w-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
              <Search className="size-5" />
            </div>

            <input
              type="text"
              className="pl-10 pr-4 py-2.5 w-full rounded-md border border-border text-text-primary bg-card placeholder:text-text-secondary focus:outline focus:ring-2 focus:ring-primary transition-all"
              placeholder="Notları ara...."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        {/* Etiket Input */}
        <div className="w-full md:w-1/2">
          <ReactSelect
            isMulti
            className="z-9999"
            styles={selectStyles}
            placeholder="Etiketleri seçiniz.."
            value={tags.map((t) => ({ value: t, label: t }))}
            options={uniqueTags.map((t) => ({ value: t, label: t }))}
            onChange={(tags) => setTags(tags.map((tag) => tag.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
