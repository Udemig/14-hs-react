import { Link } from "react-router-dom";

const Card = ({ video, isRow }) => {
  const thumbnail = video?.thumbnail?.at(-1);

  // yatay card
  if (isRow) {
    return (
      <Link
        to={`/watch?v=${video.videoId}`}
        className="flex gap-2 md:gap-4 p-2 hover:bg-zinc-900 cursor-pointer transition rounded-lg"
      >
        {/* Thumbnail */}
        <div className="relative flex-1 max-w-[500px] rounded-lg overflow-hidden h-fit min-w-[190px] aspect-video bg-zinc-900">
          <img src={thumbnail?.url} className="size-full object-contain rounded-lg" />
        </div>

        {/* Video Bilgileri */}
        <div className="flex-1 flex flex-col gap-2 @2xl:gap-3">
          <h3 className="line-clamp-2 leading-tight text-base">{video.title}</h3>

          <p className="text-xs text-zinc-400 flex gap-2">
            <span>{video?.viewCountText}</span>*<span>{video?.publishedTimeText}</span>
          </p>

          <div className="flex items-center gap-2">
            <img src={video?.channelThumbnail?.[0]?.url} className="size-6 rounded-full @max-md:hidden" />
            <p className="text-sm text-zinc-400">{video?.channelTitle}</p>
          </div>

          <p className="text-xs line-clamp-2 text-zinc-400">{video?.description}</p>
        </div>
      </Link>
    );
  }

  // dikey card
  return (
    <Link to={`/watch?v=${video.videoId}`} className="group block">
      {/* Thumbnail */}
      <div className="relative rounded-xl overflow-hidden mb-3 w-full aspect-video">
        <img src={thumbnail.url} className="size-full object-cover group-hover:scale-105 transition" />

        {video.lengthText && (
          <span className="absolute bottom-1 right-1 bg-black/80 text-xs px-2 py-0.5 rounded">{video.lengthText}</span>
        )}

        {video.isLive && (
          <span className="absolute bottom-1 right-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded">CANLI</span>
        )}
      </div>

      {/* Video Bilgileri */}
      <div className="flex gap-3">
        <img src={video.channelThumbnail?.[0]?.url} className="size-14 rounded-full" />

        <div className="flex-1">
          <h3 className="line-clamp-2 leading-tight text-lg">{video.title}</h3>

          <p className="text-sm text-[#aaaaa] hover:text-white cursor-pointer transition mb-1">{video.channelTitle}</p>

          <div className="flex items-center gap-1 text-sm text-[#aaaaaa]">
            <span className="line-clamp-1">{video?.viewCountText} görüntülenme</span>
            {video.publishedTimeText && (
              <>
                <span>*</span>
                <span className="line-clamp-1">{video.publishedTimeText}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
