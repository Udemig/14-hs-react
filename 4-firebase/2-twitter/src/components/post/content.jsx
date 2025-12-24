const Content = ({ data }) => {
  return (
    <div className="my-2">
      {data.text && <p>{data.text}</p>}

      {data.image && (
        <>
          {data.mediaType === "video" ? (
            <video
              src={data.image}
              controls
              className="rounded-xl my-2 w-full"
            />
          ) : data.mediaType === "audio" ? (
            <audio src={data.image} controls className="w-full my-2" />
          ) : (
            <img
              src={data.image}
              alt="content"
              className="rounded-xl my-2 object-cover max-h-[400px]"
            />
          )}
        </>
      )}
    </div>
  );
};

export default Content;
