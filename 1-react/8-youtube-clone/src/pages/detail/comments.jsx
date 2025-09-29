import { useEffect, useState } from "react";
import api from "../../utils/api";
import Spinner from "../../component/loader/spinner";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/comments", { params: { id: videoId } })
      .then((res) => setComments(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [videoId]);

  if (loading) return <Spinner />;

  if (error) return null;

  return (
    <div className="my-6">
      <h2 className="text-xl font-bold">{comments.commentsCount} Yorum</h2>

      <input
        type="text"
        placeholder="Yorum ekleyiniz..."
        className="w-full bg-transparent border-b border-[#3e403f] p-2 my-3 outline-none"
      />

      <div>
        {comments.data.map((comment, key) => (
          <div key={key} className="flex gap-2 sm:gap-3 items-start px-1 py-3 sm:py-4">
            <img src={comment.authorThumbnail[0].url} className="size-8 rounded-full sm:size-10" />

            <div>
              <h5 className="flex gap-2 items-center">
                <span className="font-bold">{comment.authorText}</span>
                <span className="text-gray-400 text-sm">{comment.publishedTimeText}</span>
              </h5>

              <p className="whitespace-pre-wrap">{comment.textDisplay}</p>

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1 comment-field">
                  <AiOutlineLike />
                  <span>{comment.likesCount}</span>
                </div>

                <div className="comment-field">
                  <AiOutlineDislike />
                </div>

                <span className="comment-field font-[600] text-xs">yanıtla</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
