import { useEffect, useState } from "react";
import api from "../../utils/api";
import SkeletonLoader from "../../component/loader/skeleton-loader";
import Error from "../../component/error";
import Shorts from "../../component/shorts";
import Card from "../../component/card";
import { useSearchParams } from "react-router-dom";

const Feed = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  // sayfa yüklenince
  useEffect(() => {
    setLoading(true);

    // istek atılacak adresi belirle
    const url = !selectedCategory
      ? "/home"
      : selectedCategory === "trendler"
      ? "/trending"
      : `/search?query=${selectedCategory}`;

    api
      .get(url)
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  // veriyi kategorize et
  const shortLists = data.filter((item) => item.type === "shorts_listing");
  const videos = data.filter((item) => item.type === "video");

  if (loading) return <SkeletonLoader />;

  if (error) return <Error message={error} />;

  return (
    <div className="page">
      <div className="space-y-8">
        {shortLists[0] && <Shorts data={shortLists[0].data} />}

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
          {videos.map((video, key) => (
            <Card video={video} key={key} />
          ))}
        </div>

        {shortLists[1] && <Shorts data={shortLists[1].data} />}
      </div>
    </div>
  );
};

export default Feed;
