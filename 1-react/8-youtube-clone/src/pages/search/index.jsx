import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import BasicLoader from "../../component/loader/basic-loader";
import Error from "../../component/error";
import Card from "../../component/card";
import Spinner from "../../component/loader/spinner";
import Shorts from "../../component/shorts";

const Search = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);
  const [moreLoading, setMoreLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  // component yüklenince aratılan videoları al
  useEffect(() => {
    setLoading(true);

    const params = {
      query,
    };

    api
      .get("/search", { params })
      .then((res) => {
        setData(res.data.data);
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  // devamını yükle butonuna basınca çalışıcak
  const handleMore = () => {
    setMoreLoading(true);

    const params = {
      query,
      token,
    };

    api
      .get("/search", { params })
      .then((res) => {
        setData([...data, ...res.data.data]);
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.message))
      .finally(() => setMoreLoading(false));
  };

  const videos = data.filter(
    (video) => video.type === "video" || video.type === "shorts" || video.type === "shorts_listing"
  );

  return (
    <div className="p-4 sm:p-6 md:p-10 h-[93vh] overflow-y-auto @container">
      {loading ? (
        <BasicLoader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <>
          <h2 className="text-2xl my-3">
            <span className="font-bold">{query}</span> için sonuçlar
          </h2>

          <div className="flex flex-col gap-4">
            {videos.map((video, key) =>
              video.type === "shorts_listing" ? <Shorts data={video.data} /> : <Card video={video} key={key} isRow />
            )}
          </div>

          {moreLoading && <Spinner />}

          {token && !moreLoading && (
            <div className="flex justify-center">
              <button
                onClick={handleMore}
                className="bg-zinc-700 py-2 px-5 rounded-md my-10 cursor-pointer hover:bg-zinc-800 transition"
              >
                Daha Fazla
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
