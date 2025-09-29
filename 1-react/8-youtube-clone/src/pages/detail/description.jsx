import millify from "millify";
import { useState } from "react";

const Description = ({ video }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#272727] mt-4 p-2 cursor-pointer hover:bg-[#272727]/80 transition rounded-md">
      <div className="flex gap-4 mb-2 font-semibold">
        <p>{millify(video.viewCount)} görüntülenme</p>
        <p>{video.publishDate}</p>
      </div>

      <p className="whitespace-pre-wrap" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? video.description : video.description.slice(0, 100) + "...daha fazla"}
      </p>
    </div>
  );
};

export default Description;
