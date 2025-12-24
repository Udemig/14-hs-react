import { IoMdClose } from "react-icons/io";

const Preview = ({ url, type, cancelPreview }) => {
  if (!url) return;

  return (
    <div className="relative mb-5">
      <button
        onClick={cancelPreview}
        type="button"
        className="absolute top-3 cursor-pointer end-3 text-2xl p-1 hover:bg-zinc-700 transition disabled:cursor-not-allowed bg-primary/90 rounded-lg"
      >
        <IoMdClose />
      </button>
      {type === "image" && (
        <img src={url} alt="preview" className="rounded-xl" />
      )}
      {type === "video" && (
        <video controls src={url} className="rounded-xl w-full" />
      )}
      {type === "audio" && <audio controls src={url} className="w-full mt-4" />}
    </div>
  );
};

export default Preview;
