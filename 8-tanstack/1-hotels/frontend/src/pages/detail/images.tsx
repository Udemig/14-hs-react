import type { FC } from "react";

interface Props {
  image: string;
}

const Images: FC<Props> = ({ image }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 mt-4 w-full">
      <div className="w-full">
        <img src={image} className="rounded-lg object-cover size-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <img
          src="/image-2.jpeg"
          className="object-cover size-full rounded-lg"
        />
        <img
          src="/image-3.jpeg"
          className="object-cover size-full rounded-lg"
        />
        <img
          src="/image-4.jpeg"
          className="object-cover size-full rounded-lg"
        />
        <img src="/image-5.jpg" className="object-cover size-full rounded-lg" />
      </div>
    </div>
  );
};

export default Images;
