import type { FC } from "react";

interface Props {
  images: string[];
}

const Images: FC<Props> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-6 h-fit">
      {images.map((image, key) => (
        <img key={key} src={image} className="w-full h-full object-cover" />
      ))}
    </div>
  );
};

export default Images;
