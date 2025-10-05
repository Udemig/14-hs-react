import { BASE_IMG_URL } from "../../utils/constants";

const Banner = ({ movie }) => {
  return (
    <div className="relative h-[25vh] md:h-[35vh]">
      <img src={BASE_IMG_URL + movie.backdrop_path} alt={movie.title} className="rounded-md size-full object-cover" />

      <div className="absolute inset-0 grid place-items-center bg-black/20 backdrop-blur-[0.2px]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center font-sans text-shadow-lg">
          {movie.title}
        </h2>
      </div>
    </div>
  );
};

export default Banner;
