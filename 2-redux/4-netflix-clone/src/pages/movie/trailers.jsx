import ReactPlayer from "react-player";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Trailers = ({ videos }) => {
  const show = videos && videos.length > 0;

  return show ? (
    <div className="mb-10">
      <h2 className="font-semibold text-lg md:text-xl my-5">Videolar</h2>

      <Splide options={{ pagination: false }}>
        {videos.map((video) => (
          <SplideSlide>
            <ReactPlayer src={`https://www.youtube.com/watch?v=${video.key}`} width="100%" height="400px" controls />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  ) : (
    <div className="text-center my-10">Videolar henüz mevcut değil</div>
  );
};

export default Trailers;
