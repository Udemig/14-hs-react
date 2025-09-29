import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // url'deki parametrelere eriş
  const sort = searchParams.get("siralama");
  const searchText = searchParams.get("arama_terimi");

  useEffect(() => {
    // api'a gönderilecek parametreleri ayarla
    const params = {
      q: searchText,
      _sort: "title",
      _order: sort === "z-a" ? "desc" : "asc",
    };

    // api isteği at
    axios
      .get("http://localhost:4040/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [sort, searchText]);

  if (loading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <div>
      <div className="mb-4">
        <Filter />
      </div>

      <div className="books-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Products;
