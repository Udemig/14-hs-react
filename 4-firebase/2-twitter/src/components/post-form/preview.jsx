import { IoMdClose } from "react-icons/io";

const Preview = ({ url, cancelPreview }) => {
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
      <img src={url} alt="preview" />
    </div>
  );
};

export default Preview;
