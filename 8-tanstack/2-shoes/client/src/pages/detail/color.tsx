import { useState, type FC } from "react";

interface Props {
  colors: string;
}

const Color: FC<Props> = ({ colors }) => {
  const [selected, setSelected] = useState<string>("");

  const toggle = (newValue: string) => {
    setSelected(selected === newValue ? "" : newValue);
  };

  return (
    <div>
      <h2 className="font-semibold mb-3">Renk Seçiniz</h2>

      <div className="flex gap-5">
        {colors.split(",").map((color, key) => (
          <div
            key={key}
            onClick={() => toggle(color)}
            className={selected === color ? "ring-3 rounded-full" : "ring-2 rounded-full ring-gray-400"}
          >
            <div style={{ background: color }} className="size-9 rounded-full cursor-pointer m-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Color;
